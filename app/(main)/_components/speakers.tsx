import Subtitle from '@/components/subtitle'
import Title from '@/components/title'
import { Button } from '@/components/ui/button'
import React from 'react'
import { MdPerson } from 'react-icons/md'

const Speaker = () => {
    return (
        <div className="mx-8 flex justify-between">
            <div className="border border-white w-full h-[400px] rounded text-white">
                <div className="h-4/6 flex items-center justify-center">
                    <MdPerson className='text-[200px] ' />
                </div>
                <hr />
                <div className="p-4 text-center text-sm">
                    <p className="font-bold">Name</p>
                    <p className="">Occupation</p>
                    <p className="font-bold">Company</p>
                </div>
            </div>
        </div>
    )
}

function Speakers() {
    return (
        <div className=" bg-purple-600 py-4">
            <div className='m-8'>
                <Title color='text-white' title='Speakers' />
                <Subtitle title='Evolve ICT Summit' color='text-white' />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
                <Speaker />
                <Speaker />
                <Speaker />
                <Speaker />
            </div>
            <div className="flex items-center justify-center my-8">
                <Button className='md:w-1/5 p-6 bg-purple-950 mb-8'>View all speakers</Button>
            </div>
        </div>
    )
}

export default Speakers