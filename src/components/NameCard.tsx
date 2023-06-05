import { DetailUser, SimpleUser } from "@/model/user";
import Avatar from "./Avatar";
import Link from "next/link";

type Props = {
  username: string;
  name: string;
  followers: SimpleUser[];
  following: SimpleUser[];
  image?: string;
};

export default function NameCard({
  username,
  name,
  followers,
  following,
  image,
}: Props) {
  return (
    <Link className="bg-white hover:bg-neutral-200 flex rounded-md shadow-md py-4 gap-3 leading-3 items-center w-[450px] my-3" href={`/user/${username}`}>
      <div className="mx-2">
      <Avatar image={image} size="lg"/>
      </div>
      <div className="flex flex-col">
        <p className="font-semibold text-lg">{name}</p>
        <p className="text-neutral-600 mb-3">{username}</p>
        <div className="text-sm text-neutral-400 leading-4">
        {followers ? <p>{followers.length} followers</p> : <p>0 follower</p>}
        {following ? <p>{following.length} following</p> : <p>0 following</p>}
        </div>
      </div>
    </Link>
  );
}
