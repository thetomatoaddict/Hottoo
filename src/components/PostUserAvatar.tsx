import Avatar from "./Avatar"

type Props = {
    username : string;
    image : string;
}
export default function PostUserAvatar({username, image} : Props) {
 
return <div className=" w-full flex items-center gap-2">
<Avatar image={image} size="md" />
<p className="font-semibold">{username}</p>
</div>
}