"use client";
import useSWR from "swr";
import { DetailUser } from "@/model/user";
import { HashLoader } from "react-spinners";
import { SimplePost } from "@/model/post";
import PostCard from "./PostCard";

export default function PostList() {
  const { data: posts, isLoading, error } = useSWR<SimplePost[]>("/api/posts");
  return (
    <section className="flex justify-center items-center overflow-x-auto min-h-[99px] mb-4 w-full">
      {isLoading ? (
        <HashLoader color="#afffef" />
      ) : (
        (!posts || posts.length === 0) && <p>{`Oops! It's empty.`}</p>
      )}
      {posts && (
        <ul>
          {posts?.map((post: SimplePost) => (
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
