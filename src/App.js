import React, {useState, useEffect} from 'react'
import './App.css'

function Home() {
  const[offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.scrollY)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  },[])
  return (
    <section className="Home">
      <div 
        className="Home--background"
        style={{
          transform: `translateY(${offsetY * 0.5}px)`
        }}
      >
        <div className="Home--background--glossy-window"/>
        <div className="Home--background--navbar">
          <div className="Home--background--navbar--circle"/>
          <div className="Home--background--navbar--circle"/>
          <div className="Home--background--navbar--circle"/>
          <div className="Home--background--navbar--circle"/>
        </div>
      </div>
      <div 
        className="Home--middleground"
        style={{
          transform: `translateY(${offsetY * 0.4}px)`
        }}
      >
        <div className="Home--middleground--me"/>
      </div>
      <div 
        className="Home--foreground"
        style={{
          transform: `translateY(${offsetY * 0.3}px)`
        }}
      >
        <div className="Home--foreground--social-medias">
          <div className="Home--foreground--social-medias--circle"/>
          <div className="Home--foreground--social-medias--circle"/>
          <div className="Home--foreground--social-medias--circle"/>
        </div>
        <text className="Home--foreground--header">
          Angelus
        </text>
        <text className="Home--foreground--subheader">
          Programador e design.
        </text>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  )
}

export default App
