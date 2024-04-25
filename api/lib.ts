export const fetchUser = async () =>
  await (await fetch("https://jsonplaceholder.typicode.com/users/1")).json();
    