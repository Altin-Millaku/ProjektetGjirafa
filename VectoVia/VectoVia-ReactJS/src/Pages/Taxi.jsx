import React, { useEffect } from 'react'
import Header from '../Components/Header'
import Hero from '../Components/TaxiComponents/Hero'
import TaxiServices from '../Components/TaxiComponents/TaxiServices'
import CallTaxi from '../Components/TaxiComponents/CallTaxi'
import Footer from '../Components/Footer'

const Taxi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [Taxi]);
  return (
    <div>
      <Header/>
      <Hero/>
      <TaxiServices/>
      <CallTaxi/>
      <Footer/>
    </div>
  )
}

export default Taxi