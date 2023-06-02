import React from "react"

export default function Card(props) {

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="card-image" src={`/images/${props.coverImg}`} alt="Katie Zaferes" />
            <div className="card-info">
                <img className="card-star" src="/images/card/star.png" alt="Favoriting Star" />
                <span>{props.stats.rating}</span>
                <span className="dull">({props.stats.reviewCount}) •</span>
                <span className="dull">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}