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

      // Create a user document in the "users" collection
      const userDocRef = doc(db, "users", newUserCredentials.user.uid);
      await setDoc(userDocRef, {
        displayName,
        email,
      });

      // Create an empty bookmarks document in the "bookmarks" collection
      const bookmarksDocRef = doc(db, "bookmarks", newUserCredentials.user.uid);
      await setDoc(bookmarksDocRef, { bookmarks: [] });

      // Send email verification
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
        // User is logged in, fetch additional data from Firestore
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          // User document exists, set additional user data
          const userData = userDocSnap.data();
          setCurrentUser((prevUser) => ({
            ...prevUser,
            displayName: userData.displayName,
            email: userData.email,
            // Include other fields as needed
          }));

          // Read bookmarks for the user
          const bookmarksDocRef = doc(db, "bookmarks", user.uid);
          const bookmarksDocSnap = await getDoc(bookmarksDocRef);

          if (bookmarksDocSnap.exists()) {
            // Bookmarks document exists, set bookmarks data
            const bookmarksData = bookmarksDocSnap.data();
            setCurrentUser((prevUser) => ({
              ...prevUser,
              bookmarks: bookmarksData.bookmarks || [],
              // Include other fields as needed
            }));
          }
        }
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const addBookmark = async (title, link, category) => {
    const user = auth.currentUser;

    if (user) {
      const bookmarksDocRef = doc(db, "bookmarks", user.uid);
      const bookmarksDocSnap = await getDoc(bookmarksDocRef);

      if (bookmarksDocSnap.exists()) {
        // Bookmarks document exists, update bookmarks data
        await updateDoc(bookmarksDocRef, {
          bookmarks: arrayUnion({ title, link, category }),
        });

        // Update the local state
        setCurrentUser((prevUser) => ({
          ...prevUser,
          bookmarks: [...prevUser.bookmarks, { title, link, category }],
        }));
      } else {
        // Bookmarks document doesn't exist, create it with the initial state
        await setDoc(bookmarksDocRef, {
          bookmarks: [{ title, link, category }],
        });

        // Update the local state
        setCurrentUser((prevUser) => ({
          ...prevUser,
          bookmarks: [{ title, link, category }],
        }));
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
      {!loading ? children : <p>Loading...</p>}
    </AuthContext.Provider>
  );
}
