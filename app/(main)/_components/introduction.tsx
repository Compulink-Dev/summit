import Content from '@/components/content';
import Subtitle from '@/components/subtitle';
import Title from '@/components/title';
import { Button } from '@/components/ui/button';
import React from 'react'
import { FaVideo } from "react-icons/fa";
import { home } from '@/constants/data';

function Introduction() {
    return (
        <div className="mb-8">
            <div className='m-8 flex flex-col md:flex-row justify-between gap-8'>
                <div className="flex-1 flex items-center justify-center">
                    <div className="bg-slate-400 h-[400px] w-full rounded-md flex items-center justify-center">
                        <FaVideo className='h-32 w-32 text-white' />
                    </div>
                </div>
                <div className="flex-1">
                    <Title color='text-purple-600 mb-4' title='Introduction' />
                    <Subtitle title={home[0].title} color='text-gray-500' />
                    <div className="my-4">
                        <Content content={home[0].paragraph} />
                    </div>
                    <div className="">
                        <Subtitle title={home[1].title} color='text-gray-500' />
                        <div className="my-4">
                            <Content content={home[1].paragraph} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <Button className='md:w-1/5 p-6 bg-purple-700 mb-8'>View our programme</Button>
            </div>
        </div>
    )
}

export default Introduction