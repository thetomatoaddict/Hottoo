import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { handler } from "../auth/[...nextauth]/route";
import { getFollowingPost } from "@/service/post";

export async function GET() {
    const session = await getServerSession(handler)
    const user = session?.user
    if (!user) {
        return new Response('인증 에러', {status : 401})
    }
    return getFollowingPost(user.email.split('@')[0])
    .then((data) => NextResponse.json(data))

    
}