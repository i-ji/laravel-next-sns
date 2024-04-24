"use client";

import React, { useEffect, useState } from "react";
import Post from "../CommonPost/Post";
import { PostsItem } from "@/app/type";
import { editPosts } from "@/app/api";

interface Posts {
  posts: PostsItem[];
}

const Posts: React.FC<Posts> = ({ posts }) => {
  // 同じユーザーを抽出
  const extractSameUserPosts = (post: PostsItem) => {
    const newPost = posts.filter((_post) => {
      return _post.userId === post.userId;
    });
    newPost.forEach((_post) => {
      _post.isFollow = !_post.isFollow;
    });
    return newPost;
  };

  // フォローボタンを押した時の処理
  const toggleIsFollow = async (post: PostsItem) => {
    const newPost = extractSameUserPosts(post);
    for (const _post of newPost) {
      // フォローのつけ外しする処理
      await editPosts(_post);

      // 見た目だけボタンをトグルする処理
    }
    // window.location.reload();
  };

  return (
    <main className="mt-24 max-w-[638px] mx-auto">
      {posts.length === 0 && (
        <div className="text-2xl font-bold text-center mt-60">
          <p>フォロー中のユーザーはいません。</p>
        </div>
      )}
      {posts.map((post) => {
        return (
          <Post key={post.id} post={post} emitToggleIsFollow={toggleIsFollow} />
        );
      })}
    </main>
  );
};

export default Posts;
