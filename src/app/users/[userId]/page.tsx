import React from "react";

import { getAllPosts } from "@/app/api";
import { PostsItem } from "@/app/type";
import UserHeader from "@/app/components/UserPost/UserHeader";
import Posts from "@/app/components/IndexPosts/Posts";
import PostBtn from "@/app/components/PostBtn";

interface Users {
  params: { userId: string };
}

const Users: React.FC<Users> = async (props) => {
  const posts = (await getAllPosts()).filter((post: PostsItem) => {
    return String(post.userId) === props.params.userId;
  });

  return (
    <div>
      <UserHeader params={props.params} />
      <PostBtn />
      <Posts posts={posts} />
    </div>
  );
};

export default Users;
