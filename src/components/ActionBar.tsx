import Date from "@/utility/date";
import Image from "next/image";
import { BsBookmark, BsHeart } from "react-icons/bs";

type Props = {
    likes : string[];
    username : string;
    text? : string;
    createdAt : string;
}

export default function ActionBar({likes, username, text, createdAt}:Props) {
 
return (
    <>
    
      <div className="bg-neutral-50 flex justify-between text-xl font-bold p-2">
        <BsHeart />
        <BsBookmark />
      </div>
      <div className="bg-neutral-50 p-2">
        {likes.length > 1 ? (
          <p>{likes.length} likes</p>
        ) : (
          <p>{likes.length} like</p>
        )}
        {text && (
          <p className="pt-2 pb-4">
          <span className="font-semibold">{username}</span> {text}
        </p>
        )}
        <p className="text-neutral-500 text-xs uppercase">{Date(createdAt)}</p>
      </div></>
)
}