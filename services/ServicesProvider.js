import React, { useContext, useState, useEffect, createContext } from "react";
import { auth, db, githubProvider } from "../lib/firebase";
import { v4 as uuidv4 } from "uuid";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/router";
import { doc, setDoc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { Spinner } from "evergreen-ui";

const ContextProvider = createContext();

export function useServices() {
  return useContext(ContextProvider);
}

export function ServicesProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);

      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          setCurrentUser((prevUser) => ({
            ...prevUser,
            displayName: userData.displayName,
            email: userData.email,
          }));

          const bookmarksDocRef = doc(db, "bookmarks", user.uid);
          const bookmarksDocSnap = await getDoc(bookmarksDocRef);

          if (bookmarksDocSnap.exists()) {
            const bookmarksData = bookmarksDocSnap.data();
            setCurrentUser((prevUser) => ({
              ...prevUser,
              bookmarks: bookmarksData.bookmarks || [],
            }));
          }
        }
      }

      setLoading(false);
    });

    return unsubscribe;
  }, [router]);

  // Auth services

  const signup = async (displayName, email, password) => {
    try {
      const newUserCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userDocRef = doc(db, "users", newUserCredentials.user.uid);
      await setDoc(userDocRef, {
        displayName,
        email,
      });

      const bookmarksDocRef = doc(db, "bookmarks", newUserCredentials.user.uid);
      await setDoc(bookmarksDocRef, { bookmarks: [] });

      await sendEmailVerification(newUserCredentials.user);
    } catch (error) {
      console.error("Signup Error:", error.message);
      throw error;
    }
  };

  const login = async (email, password) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Login Error:", error);
      throw error;
    }
  };

  const logout = async () => {
    return signOut(auth);
  };

  const signInWithGitHub = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, githubProvider);
      const user = result.user;

      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (!userDocSnap.exists()) {
        await setDoc(userDocRef, {
          displayName: user.displayName,
          email: user.email,
        });

        const bookmarksDocRef = doc(db, "bookmarks", user.uid);
        await setDoc(bookmarksDocRef, { bookmarks: [] });
      }

      router.push("/");
    } catch (error) {
      console.error("GitHub authentication error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // Bookmark services

  const addBookmark = async (title, description, link, category) => {
    try {
      const user = auth.currentUser;

      if (!user) {
        console.error("User not authenticated");
        return;
      }

      const bookmarksDocRef = doc(db, "bookmarks", user.uid);
      const bookmarksDocSnap = await getDoc(bookmarksDocRef);

      if (bookmarksDocSnap.exists()) {
        const newBookmark = {
          id: uuidv4(),
          title,
          description,
          link,
          category,
        };

        setCurrentUser((prevUser) => ({
          ...prevUser,
          bookmarks: prevUser?.bookmarks
            ? [...prevUser.bookmarks, newBookmark]
            : [newBookmark],
        }));

        await updateDoc(bookmarksDocRef, {
          bookmarks: arrayUnion(newBookmark),
        });
      } else {
        const newBookmarks = [
          {
            id: uuidv4(),
            title,
            description,
            link,
            category,
          },
        ];

        setCurrentUser((prevUser) => ({
          ...prevUser,
          bookmarks: prevUser?.bookmarks
            ? [...prevUser.bookmarks, ...newBookmarks]
            : newBookmarks,
        }));

        await setDoc(bookmarksDocRef, {
          bookmarks: newBookmarks,
        });
      }
    } catch (error) {
      console.error("Error adding bookmark:", error.message);
    }
  };

  const deleteBookmark = async (bookmarkId) => {
    try {
      const user = auth.currentUser;

      if (!user) {
        console.error("User not authenticated");
        return;
      }

      const bookmarksDocRef = doc(db, "bookmarks", user.uid);
      const bookmarksDocSnap = await getDoc(bookmarksDocRef);

      if (bookmarksDocSnap.exists()) {
        const updatedBookmarks = (currentUser.bookmarks || []).filter(
          (bookmark) => bookmark.id !== bookmarkId
        );

        setCurrentUser((prevUser) => ({
          ...prevUser,
          bookmarks: updatedBookmarks,
        }));

        await updateDoc(bookmarksDocRef, {
          bookmarks: updatedBookmarks,
        });
      }
    } catch (error) {
      console.error("Error deleting bookmark:", error.message);
    }
  };

  const value = {
    currentUser,
    login,
    signup,
    logout,
    signInWithGitHub,
    addBookmark,
    deleteBookmark,
  };

  return (
    <ContextProvider.Provider value={value}>
      {!loading ? children : <Spinner />}
    </ContextProvider.Provider>
  );
}
