import React from 'react'
import Navbar from './component/Navbar/Navbar.jsx'
import Hero from './component/Hero/Hero.jsx'
import Category from "./component/Category/Category.jsx"
import Category2 from "./component/Category/Category2.jsx"
import Services from './component/Services/Services.jsx'

const App = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
    </div>
  )
}

export default App
