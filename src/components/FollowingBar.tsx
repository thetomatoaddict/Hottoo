"use client";
import { DetailUser } from "@/model/user";
import Link from "next/link";
import { HashLoader } from "react-spinners";
import useSWR from "swr";
import Avatar from "./Avatar";
import MultiCarousel from "./ui/Carousel";

export default function FollowingBar() {
  const { data, isLoading, error } = useSWR<DetailUser>("/api/me");
  const users = data?.following;
  //1. 클라이언트 컴포넌트에서 백엔드에게 api 사용자의 정보를 얻어옴.
  //2. 백엔드에서는 현재 로그인된 사용자의 세션 정보를 이용해 상세정보를 새니티에서 가져옴
  //3. 여기(클라이언트 컴포넌트)에서 정보를 UI에 보여줌 (image, username)

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        (!users || users.length === 0) && <p>{`You don't have following.`}</p>
      )}
      {users && users.length > 0 && (
        <section className="bg-neutral-50 flex w-full justify-center items-center overflow-x-auto min-h-[99px] mb-4 shadow-sm shadow-neutral-300">
          <MultiCarousel>
            {users.map(({ image, username }) => (
              <Link
                key={username}
                href={`/user/${username}`}
                className="flex flex-col items-center w-20"
              >
                <Avatar size="lg" image={image} />
                <p className="w-full text-sm text-center text-ellipsis overflow-hidden">
                  {username}
                </p>
              </Link>
            ))}
          </MultiCarousel>
        </section>
      )}
    </>
  );
}
