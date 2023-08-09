'use client';

import { SimplePost } from '@/model/post';
import Image from 'next/image';
import { useState } from 'react';
import PostDetail from './PostDetail';
import PostModal from './PostModal';
import PostUserAvatar from './PostUserAvatar';
import ModalPortal from './ui/ModalPortal';
import SimpleActionBar from './SimpleActionBar';

type Props = {
  post: SimplePost;
  priority?: boolean;
};

export default function PostListCard({ post, priority = false }: Props) {
  const { userImage, username, image } = post;
  const [openModal, setOpenModal] = useState(false);
  return (
    <article className='rounded-lg shadow-md border border-gray-200 bg-white'>
      <PostUserAvatar image={userImage} username={username} />
      <Image
        className='w-full object-cover aspect-square'
        src={image}
        alt={`photo by ${username}`}
        width={500}
        height={500}
        priority={priority}
        onClick={() => setOpenModal(true)}
      />
      <SimpleActionBar post={post}/>
      {openModal && (
        <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post} />
          </PostModal>
        </ModalPortal>
      )}
    </article>
  );
}
