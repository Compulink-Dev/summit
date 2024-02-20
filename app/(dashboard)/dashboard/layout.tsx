import React from 'react'
import Sidebar from './_components/sidebar'
import Navbar from './_components/navbar';

function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='flex'>
            <div className="" style={{ flex: 1 }}>
                <Sidebar />
            </div>
            <div className="" style={{ flex: 4 }}>
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout