import React, { useEffect, useState } from "react";

export default function TopUpcoming(){
    const [topUpcoming, setTopUpcoming] = useState([]);

    useEffect(() => {
        async function getTopUpcoming(){
            const response = await fetch("http://localhost:5000/upcoming");

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
        return topUpcoming.map((upcoming) => {
            return <div className="upcoming-cell">
                <h3>{upcoming.title}</h3>
                <p>{upcoming.desc}</p>
                <img src={upcoming.src}/>
            </div>
        })
    }

    return(
        <div>
            {DisplayTopUpcoming()}
        </div>
    )
}