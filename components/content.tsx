import React from 'react'

function Content({ content }: { content: string }) {
    return (
        <p className={`text-sm text-gray-400`}>{content}</p>
    )
}

export default Content