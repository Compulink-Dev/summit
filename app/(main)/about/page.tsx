
import Layout from '@/components/layout'
import React from 'react'
import Hero from './_components/hero'
import Information from './_components/about'
import Evolve from './_components/evolve'
import Mission from './_components/mission'
import Objectives from './_components/objectives'
import Price from './_components/price'
import Subscribe from '../../../components/subscribe'
import Partners from '@/components/partners'
import Venue from './_components/venue'

function AboutPage() {
    return (
        <Layout>
            <Hero />
            <Information />
            <Evolve />
            <Mission />
            <Venue />
            <Objectives />
            <Price />
            <Subscribe />
            <Partners />
        </Layout>
    )
}

export default AboutPage