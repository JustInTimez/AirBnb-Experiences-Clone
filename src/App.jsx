import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"


function App() {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <Card
        img="katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Some things Katie Zafs says. Aweh."
        price={50}
      />

    </>
  )
}

export default App;
