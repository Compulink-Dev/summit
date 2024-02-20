import Layout from '@/components/layout'
import Partners from '@/components/partners'
import Subscribe from '@/components/subscribe'
import React from 'react'
import Partner from './_components/partner'
import Hero from './_components/hero'

function SpeakersPage() {
    return (
        <Layout>
            <Hero />
            <Partner />
            <Subscribe />
            <Partners />
        </Layout>
    )
}

export default SpeakersPage