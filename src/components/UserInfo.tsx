import Avatar from "./Avatar";
import { UserPageType } from "@/model/user";
import FollowBtn from "./FollowBtn";

type Props = {
  user: UserPageType;
};

export default function UserInfo({ user }: Props) {
  const { username, image, name, posts, followers, following } = user;

  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row">
        <Avatar image={image} size="xl" />
        <div className="p-4 flex flex-col justify-center">
          <div className="flex">
            <p className="font-bold text-lg mr-3">{username}</p>
            <span>
              <FollowBtn username={username} />
            </span>
          </div>
          <p className="text-neutral-500">{name}</p>
          <div className="flex gap-2">
            { posts == null ? <p>0 post</p> : posts === 1 ? <p>1 posts</p> : <p>{posts} posts</p>}
            { followers == null ? <p>0 follower</p> : followers === 1 ? <p>1 follower</p> : <p>{followers} followers</p>}
            { following == null ? <p>0 following</p> : <p>{following} following</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
