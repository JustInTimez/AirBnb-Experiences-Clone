import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import PopularDestinations from "./components/PopularDestinations"
import Footer from "./components/Footer"
import "./App.css"
import data from "./data"
import destinations from "./destinations"

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item}/>
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
      <PopularDestinations destinations={destinations} />
      <Footer />
    </div>
  )
}
