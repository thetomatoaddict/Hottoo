'use client';
import { DetailUser, UserPageType } from '@/model/user';
import useSWR from 'swr';
import Btn from './ui/Btn';

type Props = {
  username: string;
}
export default function FollowBtn({username}: Props) {
 
  const { data: loggedInUser } = useSWR<DetailUser>('/api/me')

  const showButton = loggedInUser && loggedInUser.username !== username
  const following =
    loggedInUser &&
    loggedInUser.following.find((item) => item.username === username)

  const text = following ? 'Unfollow' : 'Follow'
  

  return (
    <>
      {showButton && (
        <Btn text={text} onClick={() => {}} red={text === 'Unfollow'} />
      )}
    </>
  );
}