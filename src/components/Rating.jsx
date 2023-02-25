import React from "react";

import Card from "../components/Card";

import './Rating.css';


import starIcon from '../images/star.png'


function Rating() {
    return (
       <Card>
            <img src={starIcon} alt="star" className="imgContainer"/> 
            <h2 className="title">How did we do?</h2>
            <p className="text">
                Please let us know how we did with your support 
                request. All feedback is appreciated to help us
                improve our offering!
            </p>
            <div className="rating">
                <div className="rating-container">1</div>
                <div className="rating-container">2</div>
                <div className="rating-container">3</div>
                <div className="rating-container">4</div>         
                <div className="rating-container">5</div>
            </div>
            <button className="submit-btn">Submit</button>
       </Card>
    )
}

export default Rating;