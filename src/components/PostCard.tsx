'use cilent'
import { SimplePost } from "@/model/post";
import Avatar from "./Avatar";
import Image from "next/image";
import CommentForm from "./CommentForm";
import ActionBar from "./ActionBar";
import { useState } from "react";
import ModalPortal from "./ui/ModalPortal";
import PostModal from "./PostModal";
import PostDetail from "./PostDetail";
import PostUserAvatar from "./PostUserAvatar";
import { SimpleUser } from "@/model/user";

type Props = {
  post: SimplePost;
};

export default function PostCard({ post }: Props) {
  const { text, userImage, image, username, createdAt, likes } = post;
  const [openModal, setOpenModal] = useState(false)
  return (
    <article className="bg-white mb-2 shadow-md shadow-neutral-200 rounded-md">
      <div className="p-2">
      <PostUserAvatar image={userImage} username={username}/>
      </div>
      <Image
        alt={`photo by ${username}`}
        src={image}
        width={500}
        height={500}
        className="w-full object-cover aspect-square"
        onClick={()=>setOpenModal(true)}
      />
      <ActionBar
        likes={likes}
        username={username}
        text={text}
        createdAt={createdAt}
      />
      <CommentForm />
      { openModal && (
        <ModalPortal>
          <PostModal onClose={()=> setOpenModal(false)}>
            <PostDetail post={post}/>
          </PostModal>
        </ModalPortal>
      )}
    </article>
  );
}
