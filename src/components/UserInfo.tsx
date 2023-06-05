
import Avatar from "./Avatar";
import { UserPageType } from "@/model/user";

type Props = {
  user? : UserPageType;
}

export default function UserInfo({user}: Props) {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <Avatar image={user?.image} size="xl" />
        <div className="px-3">
          <p className="font-bold text-lg">{user?.username}</p>
          <p className="text-neutral-500">{user?.name}</p>
          <div className="flex gap-2">
            <p>{user?.posts} posts</p>
            <p>{user?.followers} followers</p>
            <p>{user?.following} following</p>
          </div>
        </div>
      </div>
    </div>
  );
}
