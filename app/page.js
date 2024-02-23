import Contact from '@/components/Contact'
import Home from '@/components/Home'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import React from 'react'

const page = () => {
  return (
      <main>
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </main>
  )
}

export default page