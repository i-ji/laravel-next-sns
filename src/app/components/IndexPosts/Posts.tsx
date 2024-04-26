"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Post from "../CommonPost/Post";
import { PostsItem } from "@/app/type";
import { editPosts } from "@/app/api";

interface Posts {
  posts: PostsItem[];
}

const Posts: React.FC<Posts> = ({ posts }) => {
  // パスを取得
  const router = usePathname();

  // 同じユーザーを抽出
  const extractSameUserPosts = (post: PostsItem) => {
    const newPosts = posts.filter((_post) => {
      return _post.userId === post.userId;
    });
    newPosts.forEach((_post) => {
      _post.isFollow = !_post.isFollow;
    });
    return newPosts;
  };

  // フォローボタンを押した時の処理
  const toggleIsFollow = async (post: PostsItem) => {
    const newPosts = extractSameUserPosts(post);
    for (const _post of newPosts) {
      // フォローのつけ外しする処理
      await editPosts(_post);
    }
    window.location.reload();
  };

  return (
    <main className="mt-[72px] max-w-[638px] mx-auto">
      {posts.length === 0 && (
        <div className="text-2xl font-bold text-center mt-60">
          {router === "/follow" ? (
            <p>フォロー中のユーザーはいません。</p>
          ) : (
            <p>まだ投稿はありません</p>
          )}
        </div>
      )}
      {posts.map((post, index) => {
        return (
          <Post key={post.id} post={post} emitToggleIsFollow={toggleIsFollow} />
        );
      })}
    </main>
  );
};

export default Posts;
