import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <div className='container'>
        <Title subTitle='リフォーム事例' Title='私たちが提供するもの'/>
        <Programs />
        <Title subTitle='画廊' Title='写真'/>
        <Campus />
        <Title subTitle='お客様の声' Title='ABCホームで施工されたお客様の声をご紹介します'/>
        <Testimonials />
        <Title subTitle='お問い合わせ' Title='連絡する'/>
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App