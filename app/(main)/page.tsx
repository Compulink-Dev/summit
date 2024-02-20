import Hero from '@/components/hero'
import Layout from '@/components/layout'
import React from 'react'
import Introduction from './_components/introduction'
import Summit from './_components/summit'
import Speakers from './_components/speakers'
import Events from './_components/events'
import About from './_components/about'
import Interest from './_components/interest'
import Partners from '@/components/partners'

function Home() {
  return (
    <Layout>
      <div className="">
        <Hero imageUrl='comp4.png' />
        <Introduction />
        <Summit />
        <Speakers />
        <Events />
        <About />
        <Interest />
        <Partners />
      </div>
    </Layout>
  )
}

export default Home