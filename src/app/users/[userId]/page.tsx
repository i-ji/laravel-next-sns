import React from "react";

import { getAllPosts } from "@/app/api";
import { PostsItem } from "@/app/type";
import UserHeader from "@/app/components/UserPost/UserHeader";
import UserPosts from "@/app/components/UserPost/UserPosts";

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
      <UserPosts posts={posts} />
    </div>
  );
};

export default Users;
