"use client";

import React from "react";
import Link from "next/link";
import { FaUser } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { GoGear } from "react-icons/go";

const Top = () => {
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex items-center justify-between text-2xl px-6">
      <Link href={`/users/0`} scroll={false}>
        <FaUser className="cursor-pointer" />
      </Link>
      <FaTwitter className="cursor-pointer " onClick={returnTop} />
      <GoGear />
    </div>
  );
};

export default Top;
