import React, { useEffect, useState} from "react";
import { NavLink } from "react-router-dom";

export default function TopUpcoming(){
    const [topUpcoming, setTopUpcoming] = useState([]);

    useEffect(() => {
        async function getTopUpcoming(){
            const response = await fetch("https://anime----tracker.herokuapp.com/upcoming");

            if(!response.ok){
                const message = `An error occurred: ${response.statusText}`;
                console.log(message);
                return;
               }
               const topUpcoming = await response.json();
               setTopUpcoming(topUpcoming);
        }
        getTopUpcoming();
    })

    function DisplayTopUpcoming(){
        return topUpcoming.map((upcoming, index) => {
            while(index + 1 <= 5){
                return <NavLink
            key={upcoming._id}
            className="upcoming-cell"
            to={'/series/' + upcoming._id + "/" + upcoming.title}>
                <h3>{upcoming.title}</h3>
                <p>{upcoming.desc}</p>
                <img src={upcoming.src}alt=""/>
                <h1 className="rank">{index + 1}</h1>
            </NavLink>
            }
        })
    }
    return(
        <div>
            {DisplayTopUpcoming()}
        </div>
    )
}
