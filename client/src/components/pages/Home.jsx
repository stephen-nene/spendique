import React from 'react'
import { Link } from 'react-router-dom'
import Heros from './wrappers/Heros'
import Services from './wrappers/Services'
import Stats from './wrappers/Stats'
import Testimonials from './wrappers/Testimonials'
import Teams from './wrappers/Teams'
export const Home = () => {
  return (
    <>
    <div className='flex flex-col gap-4 p-6'>
      <Heros />
      <Services />
      <Stats />
      <Testimonials />
      <Teams />


    </div>
    </>
  )
}
