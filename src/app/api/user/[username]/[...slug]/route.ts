import { NextRequest, NextResponse } from "next/server";
import { getLikedPostOf, getPostOf, getSavedPostOf } from "@/service/post";

type Context = {
    params : {slug : string[]}
}

export async function GET(req: NextRequest, context: Context) {
    const {slug} = context.params
    if (!slug || !Array.isArray(slug)|| slug.length > 2) {
        return new Response('Bad Request', {status : 400})
    }
    const [username, query] = slug
    let request = getPostOf;
    if (query === 'saved') {
        request = getSavedPostOf;
    } else if (query === 'liked'){
        request = getLikedPostOf;
    }
    return request(username).then((data) => NextResponse.json(data))

    
}