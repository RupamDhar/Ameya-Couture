import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Story from './components/Story/Story.jsx'
import Collections from './components/Collections/Collections.jsx'
import Signature from './components/Signature/Signature.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Visit from './components/Visit/Visit.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.css'

function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Collections />
        <Signature />
        <Testimonials />
        <Visit />
      </main>
      <Footer />
    </div>
  )
}

export default App
