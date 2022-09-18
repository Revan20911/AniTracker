import React, {useEffect, useState} from "react";
import "../styles/main.css";

const Show = (props) => {
    return(
        <div className="show-container">
            <h3>{props.show.title}</h3>
            <h4>{props.show.genre}</h4>
            <img src={props.show.cover}/>
            <p>{props.show.desc}</p>
        </div>
    ); 
}

export default function ShowList() {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        async function getShows() {
            const response = await fetch("http://localhost:5000/shows/");

            if(!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                console.log(message);
                return;
            }
            const shows = await response.json();
            setShows(shows);   
        }
        getShows();
        console.log(shows);

    }, [shows.length]);

    async function delShow(id) {
        await fetch(`http://localhost:5000/${id}`, {
            method: 'DELETE'
        });
    }

    function ShowsList(){
        return shows.map((show) => {
            return(
                <Show
                show={show}
                />
            )
        })
    }

    return(
        <div className="content-wrapper">
            <div className="show-list">
                {ShowsList()}
            </div>
        </div>
    );
}


