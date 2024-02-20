import Layout from '@/components/layout'
import React from 'react'
import Hero from './_components/hero'
import EventMenu from './_components/eventmenu'
import Subscribe from '@/components/subscribe'
import Partners from '@/components/partners'

function Event() {
    return (
        <Layout>
            <Hero />
            <EventMenu />
            <Subscribe />
            <Partners />
        </Layout>
    )
}

export default Event