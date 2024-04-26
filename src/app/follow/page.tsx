import Image from "next/image";
import Header from "../components/HeaderMenu/Header";
import Posts from "../components/IndexPosts/Posts";
import PostBtn from "../components/PostBtn";
import { PostsItem } from "../type";
import { getAllPosts } from "../api";

export default async function Home() {
  const posts: PostsItem[] = await getAllPosts();

  const followPost = posts.filter((post) => {
    return post.isFollow;
  });

  return (
    <>
      <Header />
      <PostBtn />
      <Posts posts={followPost} />
    </>
  );
}
