import { getServerSession } from "next-auth"
import { handler } from "../[...nextauth]/route"
import { redirect } from "next/navigation"
import { getProviders } from "next-auth/react"
import Signin from "@/components/Signin"

type Props = {
    searchParams : {
        callbackUrl: string;
    }
}

export default async function SignPage({searchParams :{callbackUrl}}: Props) {
    const session = await getServerSession(handler)
     if(session) {
        redirect('/')
     }
     const providers = (await getProviders()) ?? {}

return <section className="flex h-screen justify-center items-center">
    <Signin providers={providers} callbackUrl={callbackUrl ?? '/'}/>
    </section>
}