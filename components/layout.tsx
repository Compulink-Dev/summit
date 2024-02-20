import React from 'react'
import Navbar from '../app/(main)/_components/navbar';
import Footer from '../app/(main)/_components/footer';

function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className=''>
            <Navbar />
            {children}
            {<Footer />}
        </div>
    )
}

export default Layout