import React from 'react'

function Subtitle({ title, color }: { title: string, color: string }) {
    return (
        <p className={`text-lg ${color} font-medium`}>{title}</p>
    )
}

export default Subtitle