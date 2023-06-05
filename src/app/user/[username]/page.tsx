'use client'
import UserInfo from "@/components/UserInfo";
import { UserPageType } from "@/model/user";
import useSWR from 'swr';

type Props = {
    params: {
        username: string;
    };
};


export default function UserPage({ params: { username } }: Props) {
    const {
        data: user,
        isLoading,
        error,
      } = useSWR<UserPageType>(`/api/user/${username}`);
      console.log(user)
      
return <><UserInfo user={user}/></> 
}