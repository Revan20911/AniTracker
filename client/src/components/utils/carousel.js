import React, {useEffect, useState} from "react";
import Slider from "react-slick";

function ShowTrailers(){
    const [trailers, setTrailers] = useState([]);

    const settings ={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    useEffect(() => {
        async function getTrailers(){
           const response = await fetch("http://localhost:5000/items");

           if(!response.ok){
            const message = `An error occurred: ${response.statusText}`;
            console.log(message);
            return;
           }
           const trailers = await response.json();
           console.log(trailers);
           setTrailers(trailers);
        }
        getTrailers();
    }, [trailers.length])

    function DisplayTrailers(){
        return <Slider {...settings}>
              {trailers.map((trailer) => {
            return <iframe width="200px" height="200px" src={trailer.src}
            key={trailer._id}/>
    })} </Slider>
}

    return(
        <div>
         {DisplayTrailers()}
        </div>
    );
}

function ShowUpcoming(){
    const [upcomingShows, setUpcomingShows] = useState([]);

    const settings ={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };

    useEffect(() => {
        async function getUpcomingShows(){
           const response = await fetch("http://localhost:5000/upcoming");

           if(!response.ok){
            const message = `An error occurred: ${response.statusText}`;
            console.log(message);
            return;
           }

           const upcomingShows = await response.json();
           
           setUpcomingShows(upcomingShows);
        }
        getUpcomingShows();
    }, [upcomingShows.length])

    function DisplayUpcomingShows(){
        return <Slider {...settings}>
              {upcomingShows.map((upcoming) => {
            return <img src={upcoming.src}
            key={upcoming._id}/>
    })} </Slider>
}

    return(
        <div>
         {DisplayUpcomingShows()}
        </div>
    );
}

export {ShowUpcoming, ShowTrailers};