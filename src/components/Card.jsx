import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img className="card-image" src="/images/katie-zaferes.png" alt="Katie Zaferes" />
            <div className="card-info">
                <img className="card-star" src="/images/card/star.png" alt="Favoriting Star" />
                <span>5.0</span>
                <span className="dull">(6)• </span>
                <span className="dull">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}