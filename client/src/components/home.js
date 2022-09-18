import React from "react";
import "../styles/home.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ShowTrailers, ShowUpcoming} from "./utils/carousel";

export default class Home extends React.Component{
render(){
    return(
        <div className="home-wrapper">
            <h1>Welcome to AniTracker!</h1>
            <div className="main-content">
                <div className="seasonal-carousel">
                    <h3>Fall 2022 Anime</h3>
                    <ShowUpcoming/>
                </div>
                <div className="trailer-carousel">
                    <h3>Popular Anime Trailers</h3>
                    <ShowTrailers/>
                </div>
            </div>
        </div>
    )
    }
}    


