import React, { useContext, useState, useEffect, createContext } from "react";
import { auth, db } from "../lib/firebase";
import { v4 as uuidv4 } from "uuid";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth";
import { doc, setDoc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { Spinner } from "evergreen-ui";

const ContextProvider = createContext();

export function useAuth() {
  return useContext(ContextProvider);
}

export function ServicesProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Signup service
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

  // Login service
  const login = async (email, password) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Login Error:", error.message);
      throw error;
    }
  };

  // Logout service
  const logout = async () => {
    return signOut(auth);
  };

  // Add bookmark service
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
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    addBookmark,
  };

  return (
    <ContextProvider.Provider value={value}>
      {!loading ? children : <Spinner />}
    </ContextProvider.Provider>
  );
}
