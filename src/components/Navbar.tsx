'use client';
 
import { usePathname } from 'next/navigation';
import Link from "next/link"
import { AiOutlineHome } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';
import { BsPlusSquare } from 'react-icons/bs';
import { BsPlusSquareFill } from 'react-icons/bs';
import { RiSearchLine } from 'react-icons/ri';
import { RiSearchFill } from 'react-icons/ri';
import GradientButton from '@/components/ui/GradientButton';
import { useSession, signIn, signOut } from "next-auth/react"
import Avatar from './Avatar';


export default function Navbar() {
    const pathName = usePathname()
    const { data: session } = useSession()
    const user = session?.user
 
return (
    <header className='w-full max-w-screen-lg bg-white flex justify-between items-center px-6 py-2'>
          <Link href='/'>
            <h1 className='text-2xl font-semibold'>Dogstagram</h1>
            </Link>
          <nav className="flex gap-3 items-center">
            <Link href='/'>
            {
                pathName === "/" ? <AiFillHome className='w-7 h-7'/>:<AiOutlineHome className='w-7 h-7'/>
            }
            </Link>
            <Link href='/search'>
            {
                pathName === "/search" ?<RiSearchFill className='w-7 h-7'/>:<RiSearchLine className='w-7 h-7'/>
            }
            </Link>
            <Link href='/new'>
            {
                pathName === "/new" ? <BsPlusSquareFill className='w-6 h-6'/>:<BsPlusSquare className='w-6 h-6'/>
            }
            </Link>
            <Link href={`/user/${user?.username}`}>
            {user && <Avatar image={user.image}/>}
            </Link>
            
            {
              session ? <GradientButton text='Sign out' size='sm' onClick={()=>{signOut()}}/> : <GradientButton text='Sign in' size='sm' onClick={()=>{signIn('google', { callbackUrl: `http://localhost:3000/${pathName}`})}}/>
            }

            
          </nav>
        </header>
)
}