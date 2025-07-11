import React from 'react'
import HeroSection from './HeroSection'
import Categories from './Categories'
import DealOfTheDay from './DealOfTheDay'
import NewArrival from './NewArrival'
import Featured from './Featured'
import Info from './Info'
import Trending from './Trending'


const Home = () => {
  return (
    <>
    <HeroSection/>
    <Categories/>
    <DealOfTheDay/>
    <NewArrival/>
    <Featured/>
    <Info/>
    <Trending/>
    </>
  )
}

export default Home