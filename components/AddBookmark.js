import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

function AddBookmark() {
  const { addBookmark, currentUser } = useAuth();
  const [bookmarkTitle, setBookmarkTitle] = useState("");
  const [bookmarkLink, setBookmarkLink] = useState("");
  const [bookmarkCategory, setBookmarkCategory] = useState("");
  const [bookmarks, setBookmarks] = useState([]); // Updated to an object with "bookmarks" key

  const handleAddBookmark = () => {
    // Example: Add a bookmark with the input field values
    addBookmark(bookmarkTitle, bookmarkLink, bookmarkCategory);

    // Clear the input fields after adding a bookmark
    setBookmarkTitle("");
    setBookmarkLink("");
    setBookmarkCategory("");
  };

  return (
    <div>
      {/* Input fields for the bookmark */}
      <label>
        Title:
        <input
          type="text"
          value={bookmarkTitle}
          onChange={(e) => setBookmarkTitle(e.target.value)}
        />
      </label>

      <label>
        Link:
        <input
          type="text"
          value={bookmarkLink}
          onChange={(e) => setBookmarkLink(e.target.value)}
        />
      </label>

      <label>
        Category:
        <input
          type="text"
          value={bookmarkCategory}
          onChange={(e) => setBookmarkCategory(e.target.value)}
        />
      </label>

      {/* Example of using the addBookmark function */}
      <button onClick={handleAddBookmark}>Add Bookmark</button>
      <br />
      {currentUser?.bookmarks.map((bookmark, index) => (
        <li key={index}>
          <strong>{bookmark.title}</strong> - {bookmark.link} (
          {bookmark.category})
        </li>
      ))}
    </div>
  );
}

export default AddBookmark;
