import { BsEmojiSmile, BsSend } from "react-icons/bs";

export default function CommentForm() {
 
return (
    <form className="flex items-center gap-2 p-2 my-1">
        <BsEmojiSmile className="text-2xl font-bold text-neutral-500" />
        <input type="text" placeholder="add a comment..." className="w-full border-none outline-none" />
        <button>
          <BsSend className="text-[#63d0ff] font-bold text-xl" />
        </button>
      </form>
)
}