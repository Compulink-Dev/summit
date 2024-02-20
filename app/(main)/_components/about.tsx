import Subtitle from '@/components/subtitle'
import Title from '@/components/title'
import { Button } from '@/components/ui/button'
import React from 'react'

const Event = () => {
    return (
        <div className="w-full md:w-[400px] h-[400px] border rounded text-center">
            <div className="h-2/5 bg-purple-600 rounded-tl rounded-tr"></div>
            <Subtitle color='text-purple-600' title='Artificial Intelligence' />
        </div>
    )
}

function About() {
    return (
        <div className='m-8'>
            <div className="text-center pt-8">
                <Title color='text-purple-600' title='ABOUT OUR ANCHOR EVENTS' />
                <p className="text-gray-500 mt-2 mx-8 text-sm">The Annual ICT Summit is proudly hosted in the Harare, Zimbabwe, functions as a powerhouse where businesses engage in talks, networking for business development opportunities, and create platforms to strategize and discuss new topical ICT issues, trends, innovative ideas, and online communications.</p>
            </div>
            <div className="w-full flex items-center justify-between flex-wrap gap-4 md:gap-0 my-8">
                <Event />
                <Event />
                <Event />
            </div>
            <div className="flex items-center justify-center my-8">
                <Button className='md:w-1/5 p-6 bg-purple-600 mb-8'>Register your interest</Button>
            </div>
        </div>
    )
}

export default About