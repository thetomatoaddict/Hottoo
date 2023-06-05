import { DefaultSession } from "next-auth";
import Avatar from "./Avatar";

export default function SideBar({ user }: DefaultSession) {
  return (
    <div className="flex flex-col">
      <div className="flex">
      <Avatar image={user?.image} size="lg" highlight={false} />
      <div className="px-3">
        <p className="font-bold text-lg">{user?.name}</p>
        <p className="text-neutral-500">{user?.email?.split("@")[0]}</p>
      </div>
      </div>
      <div>
        <p className="text-sm text-neutral-500 mt-8">
          About · Help · Press · API · Jobs · Privacy · Terms · Location ·
          Language
        </p>
        <p className="font-bold text-sm mt-8 text-neutral-500">
          @Copyright DOGSTAGRAM from METAL
        </p>
      </div>
    </div>
  );
}
