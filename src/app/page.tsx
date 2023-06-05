import { getServerSession } from "next-auth";
import { handler } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import FollowingBar from "@/components/FollowingBar";
import PostList from "@/components/PostList";
import SideBar from "@/components/SideBar";

export default async function Home() {
  const session = await getServerSession(handler);
  const user = session?.user;
  
  if (!user) {
    redirect("/api/auth/signin");
  }
  return (
    <section className="pt-4 flex flex-col md:flex-row max-w-[850px] mx-auto">
      <div className="flex flex-col basis-3/5 p-4">
        <FollowingBar />
        <PostList />
      </div>
      <div className="basis-2/5 pt-4 ml-4">
        <SideBar user={user} expires={""} />
      </div>
    </section>
  );
}
