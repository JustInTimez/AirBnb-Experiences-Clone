import React from "react"

export default function PopularDestinations(props) {
  const { destinations } = props;

  const cards = destinations.map((destination) => {
    return (
      <div className="card" key={destination.name}>
        <img className="card-image" src={`${destination.image}`} />
        <p>{destination.name}</p>

        <button className="card-button">Learn More</button>
      </div>
    );
  });

  return (
    <section className="popular-destinations">
      <h2>Popular Destinations</h2>
      <div className="cards-list popular-destinations-list">{cards}</div>
    </section>
  )
}
