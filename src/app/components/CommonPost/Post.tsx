"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { FaUserCircle } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";
import { PostsItem } from "@/app/type";
import { editPosts, deletePosts } from "@/app/api";

interface Post {
  post: PostsItem;
  emitToggleIsFollow: (post: PostsItem) => void;
}

const Post: React.FC<Post> = ({ post, emitToggleIsFollow }) => {
  const [editing, setEditing] = useState(false);
  const [editedBody, setEditedBody] = useState(post.body);

  // 自分の投稿を削除
  const deleteMyPost = async (post: PostsItem) => {
    await deletePosts(post);
    window.location.reload();
  };

  // 自分の投稿を編集
  const editMyPost = () => {
    setEditing(true);
  };

  // 編集した投稿をセーブ
  const saveMyPost = async (post: PostsItem) => {
    if (editedBody === "" || editedBody.length >= 250) return;

    await editPosts({
      userId: 0,
      id: post.id,
      body: editedBody,
      isFollow: true,
      created_at: post.created_at,
      updated_at: String(Date.now()),
    });

    setEditedBody(editedBody);
    setEditing(false);
    window.location.reload();
  };

  const toggleIsFollow = (post: PostsItem) => {
    emitToggleIsFollow(post);
  };

  // 投稿時間
  const postDay = post.created_at.split("T");
  const formatedPostDay = postDay[0].split("-").join("/");
  const postTime = postDay[1].split(".");

  // フォローするボタンとフォロー中ボタン
  const followBtn = post.isFollow ? (
    <button
      className="w-32 text-black text-sm py-1 rounded-2xl ml-auto border border-black hover:bg-gray-50"
      onClick={() => toggleIsFollow(post)}
    >
      フォロー中
    </button>
  ) : (
    <button
      className="w-32 bg-black text-white text-sm py-1 rounded-2xl ml-auto hover:bg-black/70"
      onClick={() => toggleIsFollow(post)}
    >
      フォローする
    </button>
  );

  // 編集ボタン&削除ボタン
  const editOrDelete = (
    <div className="flex items-center text-2xl gap-3 ml-auto">
      {editing ? (
        <CiSaveDown2
          className="cursor-pointer"
          onClick={() => saveMyPost(post)}
        />
      ) : (
        <FaRegEdit className="cursor-pointer" onClick={editMyPost} />
      )}

      <MdDelete className="cursor-pointer" onClick={() => deleteMyPost(post)} />
    </div>
  );

  return (
    <Card className="mb-2 shadow-md">
      <CardHeader>
        <div className="flex items-center">
          <Link
            href={`/users/${post.userId}`}
            className="flex items-center text-2xl "
            scroll={false}
          >
            {post.userId === 0 ? (
              <FaUser className="mr-2" />
            ) : (
              <FaUserCircle className="mr-2" />
            )}

            <CardTitle className="hover:underline">User{post.userId}</CardTitle>
          </Link>
          <span className="ml-10 hidden sm:inline text-sm font-extralight">
            {formatedPostDay}
          </span>
          <span className="ml-2 hidden sm:inline text-sm font-extralight">
            {postTime[0]}
          </span>
          {post.userId === 0 ? editOrDelete : followBtn}
        </div>
      </CardHeader>
      <CardContent>
        {editing ? (
          <textarea
            value={editedBody}
            onChange={(e) => setEditedBody(e.target.value)}
            className="w-full border border-black px-2 py-1 rounded"
          ></textarea>
        ) : (
          <p className="font-extralight">{post.body}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default Post;
