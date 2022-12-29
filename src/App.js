import React from 'react'
import { Navbar, Brand, CTA } from './components'
import { Blog, Footer, Header, Possibility,Features, Whatgpt3} from './container'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgpt3/>
      <Features />
      <Possibility />
      <CTA/>
      <Blog />
      <Footer />
    </div>
  )
}

export default App