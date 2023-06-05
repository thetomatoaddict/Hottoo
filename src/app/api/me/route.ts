import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { handler } from "../auth/[...nextauth]/route";
import { getUser } from "@/service/user";

export async function GET() {
    const session = await getServerSession(handler)
    const user = session?.user

    if (!user) {
        return new Response('인증 에러', {status : 401})
    }
    return getUser(user.email.split('@')[0])
    .then((data) => NextResponse.json(data))
} {
    
}