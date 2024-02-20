import Title from '@/components/title'
import { Button } from '@/components/ui/button'
import { CornerUpLeft, Facebook } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGoogle } from 'react-icons/fa6'
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi"

function Login() {
    return (
        <div className='bg-purple-400 w-screen h-auto md:h-screen py-8 flex items-center justify-center'>
            <div className="border border-purple-950 w-4/6 h-5/6 rounded flex flex-col md:flex-row shadow-lg">
                <div className="flex-1 bg-purple-950 rounded-tl rounded-bl flex items-center justify-center">
                    <Image src={'/logo.png'} alt='' width={400} height={400} />
                </div>
                <div className="flex-1 flex flex-col items-start p-4 justify-start">
                    <div className="flex items-start justify-between">
                        <Title color='text-white text-5xl' title='Register for the summit' />
                        <Button variant={'outline'} className='w-12 h-12 rounded-full'>
                            <CornerUpLeft className='w-8 h-8' />
                        </Button>
                    </div>
                    <div className="mt-20 flex flex-col gap-4 items-center justify-center w-full">
                        <input placeholder='Email' className='border-none outline-none px-4 py-2 rounded w-4/6' />
                        <input placeholder='Password' className='border-none outline-none px-4 py-2 rounded w-4/6' />
                        <div className="flex items-start justify-start">
                            <Link href={'/resetpassword'} className="text-left text-sm text-white">Forgot Password</Link>
                        </div>
                        <Button className='bg-purple-700 w-4/6'>
                            <Link href={'/register'}>Log into your account</Link>
                        </Button>
                    </div>
                    <div className="mt-4 flex gap-6 items-center justify-center w-full">
                        <Button variant={'outline'} className='h-16 w-16 rounded-full bg-blue-800 text-white'>{<Facebook />}</Button>
                        <Button variant={'outline'} className='h-16 w-16 rounded-full text-2xl bg-red-600 text-white'><FaGoogle /></Button>
                        <Button variant={'outline'} className='h-16 w-16 rounded-full text-2xl bg-blue-500 text-white'><PiMicrosoftOutlookLogoFill /></Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login