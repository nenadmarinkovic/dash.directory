// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";

// function AddBookmark() {
//   const { addBookmark, currentUser } = useAuth();
//   const [bookmarkTitle, setBookmarkTitle] = useState("");
//   const [bookmarkLink, setBookmarkLink] = useState("");
//   const [bookmarkDescription, setBookmarkDescription] = useState("");
//   const [bookmarkCategory, setBookmarkCategory] = useState("");


//   const handleAddBookmark = () => {
//     // Example: Add a bookmark with the input field values
//     addBookmark(bookmarkTitle, bookmarkLink, bookmarkCategory);

//     // Clear the input fields after adding a bookmark
//     setBookmarkTitle("");
//     setBookmarkLink("");
//     setBookmarkDescription("");
//     setBookmarkCategory("");
//   };

//   return (
//     <SignForm>
   
      
//         <SignField>
//           <Strong color={textMuted}>Title:</Strong>

//           <TextInput
//             marginTop={3}
//             background={bw}
//             value={bookmarkTitle}
//             onChange={(e) => setBookmarkTitle(e.target.value)}
//             name="text-input-name"
//             placeholder="Bookmark's title"
//           />
//         </SignField>
  
//     <SignField>
//       <Strong color={textMuted}>Description:</Strong>

//       <TextInput
//         marginTop={3}
//         background={bw}
//         value={bookmarkDescription}
//         onChange={(e) => setBookmarkDescription(e.target.value)}
//         name="text-input-name"
//         placeholder="Bookmark's description"
//       />
//     </SignField>
//     <button onClick={handleAddBookmark}>Add Bookmark</button>
//     </SignForm>
   

   
//       <br />
      
//     </div>
//   );
// }

// export default AddBookmark;
