'use client'
import { UserPageType } from "@/model/user";
import { useState } from "react";
import useSWR from 'swr';

type Props = {
    user : UserPageType;
}

export default function Userposts({user:{username}}:Props) {
 const [tab, setTab] = useState('posts')
 const {
    data: posts,
    isLoading,
    error,
  } = useSWR(`/api/user/${username}/${tab}`)
 console.log(posts)
 console.log(username)
return <></>
}