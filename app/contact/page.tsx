"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();
  return (
    <div>
      Contact
      <h1>
        <Link href="/">BLOG</Link>
        <Link href={`/blog/23231231312`}>BLOG12</Link>
        <button onClick={() => router.push("/")}>home</button>
      </h1>
    </div>
  );
};

export default Contact;
