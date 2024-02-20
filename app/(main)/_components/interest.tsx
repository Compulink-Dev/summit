import Title from '@/components/title'
import React from 'react'


const Card = () => {
    return (
        <div className="border w-1/5 h-[150px] text-center py-4">
            <Title color='text-purple-700 mt-2' title='Attendees' />
            <Title color='text-purple-700 mt-4' title='Attendees' />
        </div>
    )
}

function Interest() {
    return (
        <div className='m-8'>
            <div className="text-center">
                <Title color='text-purple-600' title='The Place to be' />
                <p className="text-gray-500 mt-2 mx-8 text-sm">
                    You can't beat Evolve I.C.T Summit for size, depth and opportunity: we're truly the continent's most influential tech event. Don't miss out on being part of Africa's largest tech event this May!
                </p>
            </div>
            <div className="flex items-center justify-center mt-8 gap-4 flex-wrap">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Interest