import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { handler } from "../../auth/[...nextauth]/route";
import { FindUser } from "@/service/user";

type Context = {
    params : {username : string}
}

export async function GET(request: NextRequest, context: Context) {
    const session = await getServerSession(handler)
    const user = session?.user
    if (!user) {
        return new Response('인증 에러', {status : 401})
    }
    return FindUser(context.params.username)
    .then((data) => NextResponse.json(data))

    
}