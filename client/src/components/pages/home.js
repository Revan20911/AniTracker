import React from "react";
import "../styles/home.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopUpcoming from "../utils/topup";
import {ShowTrailers, ShowUpcoming} from "../utils/carousel";

export default class Home extends React.Component{
render(){
    return(
        <>
        <div className="title"><h1>Welcome to AniTracker!</h1></div>
        <div className="home-wrapper">
            <div className="main-content">
                <div className="seasonal-carousel">
                    <h3>Fall 2022 Anime</h3>
                    <ShowUpcoming/>
                </div>
                <div className="trailer-carousel">
                    <h3>Popular Anime Trailers</h3>
                    <ShowTrailers/>
                </div>
                <div className="seasonal-carousel">
                    <h3>Popular Manga</h3>
                    <ShowUpcoming/>
                </div>
            </div>
            <div className="sub-content-wrap">
                <div>
                    <div className="sub-content">
                    <h3 className="top-title">Top Airing</h3>
                    <TopUpcoming/>
                    </div>
                    </div>
                   <div>
                    <div className="sub-content">
                    <h3 className="top-title">Top Upcoming</h3>
                    <TopUpcoming/>
                    </div>
                    </div>
                </div>
        </div>
        </>
    )
    }
}    


