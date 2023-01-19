export const postLoaders = async () => {
  const postData = await fetch("https://jsonplaceholder.typicode.com/posts");
  return postData;
};
