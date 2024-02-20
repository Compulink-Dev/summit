import React from 'react'

interface TitleProps {
    color: string
    title: string
}

function Title({ color, title }: TitleProps) {
    return (
        <p className={`text-3xl ${color} font-bold`}>{title}</p>
    )
}

export default Title