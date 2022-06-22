// First Patika.dev Homework About Async Function

import axios from "axios";

export default async function getData(userId,postId) {
  const {data:users} = await axios("https://jsonplaceholder.typicode.com/users/" + userId);
  const {data:posts} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + postId);

  console.log(users);
  console.log(posts);
}

getData(1,1,);