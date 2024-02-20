import React from 'react'
import Hero from './_components/hero'
import Layout from '@/components/layout'
import Contactform from './_components/contactform'

function Contact() {
    return (
        <Layout>
            <div className=''>
                <Hero />
                <Contactform />
            </div>
        </Layout>
    )
}

export default Contact