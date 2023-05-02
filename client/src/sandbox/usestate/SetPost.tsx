// import { type } from "os";
// import { useState } from "react";
// import { TableRow } from "@mui/material";
// import { MouseEvent } from "react";
// import Box from "@mui/material/Box/Box";

// interface Post {
//   title: string | Date;
//   subtitle: string;
//   author: string;
//   createdAt: string;
// }

// const SetPost = () => {
//   const INITIAL_POST: Post = {
//     title: "",
//     subtitle: "",
//     author: "",
//     createdAt: "",
//   };

//   const [isLogged, setIsLogged] = useState(false);
//   console.log(isLogged);

//   const [post, setPost] = useState(INITIAL_POST);
//   const [posts, setPosts] = useState<Post[] | []>([]);

//   type Event = MouseEvent<HTMLButtonElement>;

//   const createNewPost = (e: Event) => {
//     e.preventDefault();

//     setPosts((prev) => [...prev, { ...post, createdAt: new Date() }]);
//     // const newPosts = [...posts, post];
//     // post.createdAt = String(new Date());
//     // setPost(newPosts);
//     return setPost(INITIAL_POST);
//   };

//   return (
//     <Box>
//       <button onClick={() => setIsLogged((prev) => !prev)}>
//         {isLogged ? "Logout" : "Login"}
//       </button>
//       <h1>{post.title}</h1>
//       <h2>{post.subtitle}</h2>
//       <p>
//         {post.author} {post.createdAt}
//       </p>
//       <form action="">
//         <input type="text" />
//       </form>
//       <button disabled={!post.title || !post.subtitle} onClick={createNewPost}>
//         click here
//       </button>
//       {isLogged && !!posts.length && (
//         <form action="">
//           <input
//             type="text"
//             placeholder="sub title"
//             onChange={(e) =>
//               setPost((prev) => ({ ...prev, title: e.target.value }))
//             }
//             value={post.subtitle}
//           />

//           <input
//             type="text"
//             placeholder="author"
//             onChange={(e) =>
//               setPost((prev) => ({ ...prev, title: e.target.value }))
//             }
//           />
//           <button onClick={createNewPost}>create post</button>
//         </form>
//       )}
//       <table>
//         <thead>
//           <tr>
//             <th>title</th>
//             <th>sub title</th>
//             <th>author</th>
//             <th>created at</th>
//           </tr>
//           <thead>
//             <tbody>
//               {posts.map((p, index) => (
//                 <tr>
//                   <td>{index + 1}</td>
//                   <td>{p.title}</td>
//                   <td>{p.subtitle}</td>
//                   <td>{p.author}</td>
//                   <td>{p.createdAt}</td>
//                 </tr>
//               ))}{" "}
//             </tbody>
//           </thead>
//         </thead>
//       </table>
//     </Box>
//   );
// };
// export default SetPost;

// *****************************

// import React, { useState } from "react";

// const SetPost = () => {
//   const INITIAL_POST = {
//     createdAt: "",
//     author: "",
//     subtitele: "",
//     title: "",
//   };

//   const [isLogged, setIsLogged] = useState(false);
//   const [post, setPost] = useState(INITIAL_POST);

//   console.log(isLogged);

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <h2>{post.subtitele}</h2>
//       <p>
//         {post.author} {post.createdAt}
//       </p>
//       <button onClick={() => setIsLogged((prev) => !prev)}>Click here</button>
//       <br />

//       {isLogged && (
//         <form>
//           <input
//             type="text"
//             placeholder="Enter a title"
//             onChange={(event) =>
//               setPost((prev) => ({ ...prev, title: event.target.value }))
//             }
//           />
//           <input
//             type="text"
//             placeholder="Enter a subtitele"
//             onChange={(event) =>
//               setPost((prev) => ({ ...prev, subtitele: event.target.value }))
//             }
//           />
//           <input
//             type="text"
//             placeholder="Enter a author"
//             onChange={(event) =>
//               setPost((prev) => ({ ...prev, author: event.target.value }))
//             }
//           />
//         </form>
//       )}
//     </div>
//   );
// };

// export default SetPost;
