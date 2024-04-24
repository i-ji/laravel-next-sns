import Image from "next/image";
import Header from "./components/HeaderMenu/Header";
import Posts from "./components/RecommendedPosts/Posts";
import PostBtn from "./components/PostBtn";
import { getAllPosts } from "./api";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <>
      <Header />
      <Posts posts={posts} />
      <PostBtn />
    </>
  );
}
