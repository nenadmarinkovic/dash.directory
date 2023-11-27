import React, { useContext, useState, useEffect, createContext } from 'react';
import { auth, db, githubProvider } from '../lib/firebase';
import { v4 as uuidv4 } from 'uuid';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithPopup,
} from 'firebase/auth';
import { useRouter } from 'next/router';
import { doc, setDoc, getDoc, updateDoc, arrayUnion, serverTimestamp } from 'firebase/firestore';
import { Spinner, toaster } from 'evergreen-ui';

const ContextProvider = createContext();

export function useServices() {
  return useContext(ContextProvider);
}

export function ServicesProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cookieBannerAccepted, setCookieBannerAccepted] = useState(false); // New state

  const router = useRouter();

  // Cookie Banner

  const handleCookieBannerAccept = () => {
    // Save the user's preference in local storage
    localStorage.setItem('cookieBannerAccepted', 'true');
    setCookieBannerAccepted(true);
  };

  // Auth services

  const signup = async (displayName, email, password) => {
    try {
      const newUserCredentials = await createUserWithEmailAndPassword(auth, email, password);

      const userDocRef = doc(db, 'users', newUserCredentials.user.uid);
      await setDoc(userDocRef, {
        displayName,
        email,
      });

      const bookmarksDocRef = doc(db, 'bookmarks', newUserCredentials.user.uid);
      await setDoc(bookmarksDocRef, { bookmarks: [] });

      await sendEmailVerification(newUserCredentials.user);
    } catch (error) {
      console.error('Signup Error:', error.message);
      throw error;
    }
  };

  const login = async (email, password) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Login Error:', error);
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

      const userDocRef = doc(db, 'users', user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (!userDocSnap.exists()) {
        await setDoc(userDocRef, {
          displayName: user.displayName,
          email: user.email,
        });

        const bookmarksDocRef = doc(db, 'bookmarks', user.uid);
        await setDoc(bookmarksDocRef, { bookmarks: [] });
      }

      router.push('/i');
      toaster.success('GitHub authentication successful!');
    } catch (error) {
      console.error('GitHub authentication error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  // Bookmark services

  const addBookmark = async (title, description, link, category) => {
    try {
      const user = auth.currentUser;

      if (!user) {
        console.error('User not authenticated');
        return;
      }

      const bookmarksDocRef = doc(db, 'bookmarks', user.uid);
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
          bookmarks: prevUser?.bookmarks ? [...prevUser.bookmarks, newBookmark] : [newBookmark],
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
          bookmarks: prevUser?.bookmarks ? [...prevUser.bookmarks, ...newBookmarks] : newBookmarks,
        }));

        await setDoc(bookmarksDocRef, {
          bookmarks: newBookmarks,
        });
      }
      toaster.success('Bookmark added.');
    } catch (error) {
      console.error('Error adding bookmark:', error.message);
    }
  };

  const deleteBookmark = async (bookmarkId) => {
    try {
      const user = auth.currentUser;

      if (!user) {
        console.error('User not authenticated');
        return;
      }

      const bookmarksDocRef = doc(db, 'bookmarks', user.uid);
      const bookmarksDocSnap = await getDoc(bookmarksDocRef);

      if (bookmarksDocSnap.exists()) {
        const updatedBookmarks = (currentUser.bookmarks || []).filter(
          (bookmark) => bookmark.id !== bookmarkId,
        );

        setCurrentUser((prevUser) => ({
          ...prevUser,
          bookmarks: updatedBookmarks,
        }));

        await updateDoc(bookmarksDocRef, {
          bookmarks: updatedBookmarks,
        });
      }
      toaster.success('Bookmark deleted!');
    } catch (error) {
      console.error('Error deleting bookmark:', error.message);
    }
  };

  const editBookmark = async (bookmarkId, updatedBookmark) => {
    try {
      const user = auth.currentUser;

      if (!user) {
        console.error('User not authenticated');
        return;
      }

      const bookmarksDocRef = doc(db, 'bookmarks', user.uid);
      const bookmarksDocSnap = await getDoc(bookmarksDocRef);

      if (bookmarksDocSnap.exists()) {
        const updatedBookmarks = (currentUser.bookmarks || []).map((bookmark) =>
          bookmark.id === bookmarkId ? { ...bookmark, ...updatedBookmark } : bookmark,
        );

        setCurrentUser((prevUser) => ({
          ...prevUser,
          bookmarks: updatedBookmarks,
        }));

        await updateDoc(bookmarksDocRef, {
          bookmarks: updatedBookmarks,
        });
      }

      toaster.success('Bookmark updated!');
    } catch (error) {
      console.error('Error updating bookmark:', error.message);
    }
  };

  // Task services

  const addTask = async (name, project, priority) => {
    try {
      const user = auth.currentUser;

      if (!user) {
        console.error('User not authenticated');
        return;
      }

      const tasksDocRef = doc(db, 'tasks', user.uid);
      const tasksDocSnap = await getDoc(tasksDocRef);

      const newTask = {
        id: uuidv4(),
        done: false,
        date: new Date(), // Use current date
        name,
        project,
        priority,
      };

      if (tasksDocSnap.exists()) {
        setCurrentUser((prevUser) => ({
          ...prevUser,
          tasks: prevUser?.tasks ? [...prevUser.tasks, newTask] : [newTask],
        }));

        await updateDoc(tasksDocRef, {
          tasks: arrayUnion({
            id: newTask.id,
            done: newTask.done || false,
            date: newTask.date || '',
            name: newTask.name || '',
            project: newTask.project || '',
            priority: newTask.priority || '',
          }),
        });
      } else {
        const newTasks = [newTask];

        setCurrentUser((prevUser) => ({
          ...prevUser,
          tasks: prevUser?.tasks ? [...prevUser.tasks, ...newTasks] : newTasks,
        }));

        await setDoc(tasksDocRef, {
          tasks: newTasks,
        });
      }

      toaster.success('Task added.');
    } catch (error) {
      console.error('Error adding task:', error.message);
      toaster.danger('Failed to add task. Please try again.');
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const user = auth.currentUser;

      if (!user) {
        console.error('User not authenticated');
        return;
      }

      const tasksDocRef = doc(db, 'tasks', user.uid);
      const tasksDocSnap = await getDoc(tasksDocRef);

      if (tasksDocSnap.exists()) {
        const updatedTasks = (currentUser.tasks || []).filter((task) => task.id !== taskId);

        setCurrentUser((prevUser) => ({
          ...prevUser,
          tasks: updatedTasks,
        }));

        await updateDoc(tasksDocRef, {
          tasks: updatedTasks,
        });
      }
      toaster.success('Task deleted!');
    } catch (error) {
      console.error('Error deleting task:', error.message);
    }
  };

  const editTask = async (taskId, updatedTask) => {
    try {
      const user = auth.currentUser;

      if (!user) {
        console.error('User not authenticated');
        return;
      }

      const tasksDocRef = doc(db, 'tasks', user.uid);
      const tasksDocSnap = await getDoc(tasksDocRef);

      if (tasksDocSnap.exists()) {
        const updatedTasks = (currentUser.tasks || []).map((task) =>
          task.id === taskId ? { ...task, ...updatedTask } : task,
        );

        setCurrentUser((prevUser) => ({
          ...prevUser,
          tasks: updatedTasks,
        }));

        await updateDoc(tasksDocRef, {
          tasks: updatedTasks,
        });
      }

      toaster.success('Task updated!');
    } catch (error) {
      console.error('Error updating task:', error.message);
    }
  };

  const updateTask = (tasks) => {
    setCurrentUser((prevUser) => ({
      ...prevUser,
      tasks: tasks,
    }));
  };

  useEffect(() => {
    const isCookieBannerAccepted = localStorage.getItem('cookieBannerAccepted');
    setCookieBannerAccepted(Boolean(isCookieBannerAccepted));
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);

      if (user) {
        const userDocRef = doc(db, 'users', user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          setCurrentUser((prevUser) => ({
            ...prevUser,
            displayName: userData.displayName,
            email: userData.email,
          }));

          const bookmarksDocRef = doc(db, 'bookmarks', user.uid);
          const bookmarksDocSnap = await getDoc(bookmarksDocRef);

          if (bookmarksDocSnap.exists()) {
            const bookmarksData = bookmarksDocSnap.data();
            setCurrentUser((prevUser) => ({
              ...prevUser,
              bookmarks: bookmarksData.bookmarks || [],
            }));
          }

          const tasksDocRef = doc(db, 'tasks', user.uid);
          const tasksDocSnap = await getDoc(tasksDocRef);

          if (tasksDocSnap.exists()) {
            setCurrentUser((prevUser) => ({
              ...prevUser,
              tasks: tasksDocSnap.data().tasks || [],
            }));
          }
        }
      }

      setLoading(false);
    });

    return unsubscribe;
  }, [router]);

  const value = {
    currentUser,
    cookieBannerAccepted,
    handleCookieBannerAccept,
    login,
    signup,
    logout,
    signInWithGitHub,
    addBookmark,
    deleteBookmark,
    editBookmark,
    addTask,
    deleteTask,
    editTask,
    updateTask,
  };

  return (
    <ContextProvider.Provider value={value}>
      {!loading ? children : <Spinner />}
    </ContextProvider.Provider>
  );
}
