import Image from "next/image";
type AvatarSize = "sm" | "lg" | "md" | "xl";
type Props = {
  image?: string | null;
  size?: AvatarSize;
  highlight?: boolean;
};
export default function Avatar({
  image,
  size = "sm",
  highlight = true,
}: Props) {
  return (
    <div
      className={`rounded-full bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 ${ContainerCustomOption(size)} flex justify-center items-center`}
    >
      <img
        alt="user profile"
        src={image ?? undefined}
        className={`rounded-full bg-white object-cover ${AvatarCustomOption(size,highlight)}`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

function AvatarCustomOption(size: AvatarSize, highlight: boolean) {
  switch (highlight) {
    case true:
      switch (size) {
        case "sm":
            return "p-[0.1rem] w-[32px] h-[32px]"
        case "md":
            return "p-[0.15rem] w-[41px] h-[41px]"
        case "lg":
            return "p-[0.2rem] w-16 h-16"
        case "xl":
          return "p-[0.3rem] w-[140px] h-[140px]"
      }
    case false:
      return "h-full w-full p-[0.2rem]]";
  }
}

function ContainerCustomOption(size: AvatarSize) {
    switch (size) {
        case "sm":
            return "w-9 h-9"
        case "md":
            return "w-[45px] h-[45px]"
        case "lg":
            return "w-[68px] h-[68px]"
            case "xl":
            return "w-[150px] h-[150px]"
      }
}
