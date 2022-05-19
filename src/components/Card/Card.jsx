import React from 'react'
import './Card.sass'

function Card() {
    return (
        <div className="card">
            <img src="assets/png/card-img.png" className="card-img-top card--img" alt="card-img"/>
            <div className="card-body">
                <img src="assets/jpg/profile-img.jpg" className="profile--img" alt="profile-img"/>
                <div className="profile--text">
                <h5 className="card-title">Sam Jerremy</h5>
                <p className="card-text">#dayAtTheBeach</p>
                </div>
            </div>
        </div>
    )
}

export default Card