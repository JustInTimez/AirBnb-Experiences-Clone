import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img className="card-image" src={`/images/${props.img}`} alt="Katie Zaferes" />
            <div className="card-info">
                <img className="card-star" src="/images/card/star.png" alt="Favoriting Star" />
                <span>{props.rating}</span>
                <span className="dull">({props.reviewCount}) •</span>
                <span className="dull">{props.country}</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}