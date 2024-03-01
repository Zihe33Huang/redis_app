import React from 'react';
import "./Heading.css";
import img from "../img.png";



export default function Heading({setShowExp, total}) {
    return (
        <div className="heading">
            <div className="heading--text">
                <h3>Top Music</h3>
                <h2>Top Pop Music</h2>
            </div>
            <div className="heading--btns">
                <button onClick={() => setShowExp(true)}>explain</button>
                <button  onClick={() => setShowExp(true)}>renew</button>
                <p>* crawl newest data from Internet</p>
            </div>

            <p className="heading--number">Total Number: {total}</p>
            <img className="heading--img" src={img} alt="Music Pic"/>

        </div>
    )
}
