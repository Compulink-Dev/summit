import React from 'react'
import { Color } from '@/constants/color'
import Link from 'next/link'
import { Button } from '@/components/ui/button'


function Hero() {
    return (
        <div className={`bg-[url('/bg6.jpg')] h-[600px] w-full bg-cover grid grid-cols-1 md:grid-cols-2 opacity-95`}>
            <div className="pt-12 container mx-auto max-w-7xl flex flex-col justify-center items-center">
                <h1 className="text-9xl text-white font-bold mb-4">LEAD</h1>
                <h1 className="text-7xl text-white font-bold mb-4">WITH</h1>
                <h1 className="text-7xl text-white font-bold mb-4" style={{ color: Color.colorBg }}>
                    VISION
                </h1>

            </div>
            <div className="flex flex-col items-center justify-end pb-8 md:pb-36">
                <Button className='bg-purple-700 p-8 w-3/5'>
                    <Link href={'/register'}>
                        Register your interest for the Evolve Summit
                    </Link>
                </Button>
                <Button className='mt-4 w-3/5 p-8' variant={'outline'}>
                    <Link href={'/contact'}>
                        Enquire to become a partner
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default Hero