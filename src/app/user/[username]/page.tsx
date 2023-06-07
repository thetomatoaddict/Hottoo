'use client'
import UserInfo from "@/components/UserInfo";
import Userposts from "@/components/Userposts";
import { UserPageType } from "@/model/user";
import { HashLoader } from "react-spinners";
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
      if(!user) return null;
return <>{isLoading ? (
    <div className="mt-4"><HashLoader color="#afffef" /></div>
  ) : 
  <>
  <UserInfo user={user}/>
  <Userposts user={user}/>
  </> }</> 
}