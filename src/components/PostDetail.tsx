import { FullPost, SimplePost } from "@/model/post";
import userSWR from "swr";
import Image from "next/image";
import PostUserAvatar from "./PostUserAvatar";
import ActionBar from "./ActionBar";
import CommentForm from "./CommentForm";
import Avatar from "./Avatar";

type Props = {
  post: SimplePost;
};

export default function PostDetail({ post }: Props) {
  const { id, text, userImage, image, username, createdAt, likes } = post;
  const { data } = userSWR<FullPost>(`/api/posts/${id}`);
  const comments = data?.comments;
  console.log(comments);
  return (
    <section className="flex w-full h-full">
      <div className="relative basis-3/5">
        <Image
        className="object-cover"
          src={image}
          alt={`photo by ${username}`}
          priority
          fill
          sizes="650px"
        />
      </div>
      <div className="basis-2/5 w-full flex flex-col border-t border-gray-200 h-full overflow-y-auto p-4 mb-1">
      <PostUserAvatar image={userImage} username={username}/>
      <ul className="h-full">
        {comments && comments.map(({image, username : commentUsername, comment},index)=>
        <li key={index} className="flex items-center mb-2 gap-2">
          {username !== commentUsername && <Avatar image={image} size="sm" highlight={false}/>}
          <div className="ml-2 flex gap-2">
          {username !== commentUsername && <span className="font-semibold">{commentUsername}</span>}
          {username !== commentUsername ?  <span>{comment}</span> : <span className="my-4">{comment}</span>}
          </div>
        </li>)}
      </ul>

      <ActionBar likes={likes} username={username} createdAt={createdAt}/>
      <CommentForm/>
      </div>
    </section>
  );
}
