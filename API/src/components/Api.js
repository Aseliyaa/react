const FetchUrl = async ( url ) => {
  const info = await fetch(`${url}`).then((response) => response.json());
  return { info };
};

export default FetchUrl;

// //     //Albums

// const albums = await fetch("https://jsonplaceholder.typicode.com/albums").then(
//   (response) => response.json()
// );

//     //Users
// const users = await fetch("https://jsonplaceholder.typicode.com/users").then(
//   (response) => response.json()
// );
//     //User
// const user = await fetch(
//   `https://jsonplaceholder.typicode.com/users/${id}`
// ).then((response) => response.json());

// const albums = await fetch(
//   `https://jsonplaceholder.typicode.com/albums?userId=${id}`
// ).then((response) => response.json());

//     //Album
// const album = await fetch(
//   `https://jsonplaceholder.typicode.com/albums/${id}`
// ).then((responce) => responce.json());

// const photos = await fetch(
//   `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
// ).then((responce) => responce.json());

// const user = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
//   .then((response) => response.json())
//   .then((responce) =>
//     fetch(`https://jsonplaceholder.typicode.com/users/${responce.userId}`).then(
//       (responce) => responce.json()
//     )
//   );
