import React, { useContext, useState, useEffect } from "react";
import { auth, db } from "../lib/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth";
import { doc, setDoc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { Spinner } from "evergreen-ui";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function signup(displayName, email, password) {
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
  }

  async function login(email, password) {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Login Error:", error.message);
      throw error;
    }
  }

  function logout() {
    return signOut(auth);
  }

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
            // Include other fields as needed
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

  const addBookmark = async (title, description, link, category) => {
    const user = auth.currentUser;

    if (user) {
      const bookmarksDocRef = doc(db, "bookmarks", user.uid);
      const bookmarksDocSnap = await getDoc(bookmarksDocRef);

      if (bookmarksDocSnap.exists()) {
        const updatedBookmarks = arrayUnion({
          title,
          description,
          link,
          category,
        });

        setCurrentUser((prevUser) => ({
          ...prevUser,
          bookmarks: prevUser?.bookmarks
            ? [...prevUser.bookmarks, updatedBookmarks]
            : [updatedBookmarks],
        }));

        await updateDoc(bookmarksDocRef, {
          bookmarks: updatedBookmarks,
        });
      } else {
        const newBookmarks = [{ title, description, link, category }];

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
    }
  };

  const value = {
    currentUser,
    login,
    signup,
    logout,
    addBookmark,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading ? children : <Spinner />}
    </AuthContext.Provider>
  );
}
