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
            <div className="card-badge">SOLD OUT</div>
            <img className="card-image" src={`/images/${props.img}`} alt="Katie Zaferes" />
            <div className="card-info">
                <img className="card-star" src="/images/card/star.png" alt="Favoriting Star" />
                <span>{props.rating}</span>
                <span className="dull">({props.reviewCount}) •</span>
                <span className="dull">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}