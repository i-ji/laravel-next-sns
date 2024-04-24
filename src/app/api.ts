import { PostsItem } from "./type";
const ENDPOINT = "http://localhost:8000/api/posts";

// postsを全取得する
export const getAllPosts = async () => {
  const res = await fetch(ENDPOINT, {
    cache: "no-store",
  });
  const posts = await res.json();
  return posts;
};

// postsに追加
export const addPosts = async (inputBody: string) => {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      body: inputBody,
    }),
  });
  const newPost = await res.json();
  return newPost;
};

// postの編集
export const editPosts = async (post: PostsItem): Promise<PostsItem[]> => {
  const res = await fetch(`${ENDPOINT}/${post.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      isFollow: post.isFollow,
      body: post.body,
      updated_ad: post.updated_at,
    }),
  });
  const updatedPost = await res.json();

  return updatedPost;
};

// postの削除
export const deletePosts = async (post: PostsItem): Promise<PostsItem[]> => {
  const res = await fetch(`${ENDPOINT}/${post.id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  const deletePost = await res.json();
  return deletePost;
};
