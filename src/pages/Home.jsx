import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '@/components/StarBackground'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import About from '../components/About'
import Skills from '../components/Skills'
import Project from '../components/Project'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'


const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>

      {/* theme */}
      {/* <ThemeToggle /> */}

      {/* background */}
      <StarBackground />

       {/* Navbar */}
      <Navbar />

      <main>
        <HeroSection />

        <About />

        <Skills/>

        <Project />

        <Contact/>

        <Footer/>

        <ScrollToTop />
      </main>

      
    </div>
  )
}

export default Home
