import React, {useEffect, useState} from "react";
import SubmitButton from "./utils/button";
import "../styles/main.css";

const Show = (props) => {
    return(
        <div className="show-container">
            <h3>{props.show.title}</h3>
            <img src={props.show.cover}/>
            <h4>{props.show.genre}</h4>
            <p>{props.show.desc}</p>
            <div className="button-row">
                <SubmitButton className="edit" text="Edit"/>
                <SubmitButton className="delete" text="Delete" 
                onClick={() => props.delShow(props.show._id)}/>
            </div>
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
        

    }, [shows.length]);

    async function delShow(id) {
        await fetch(`http://localhost:5000/${id}`, {
            method: 'DELETE'
        });

        const newShows = shows.filter((el) => el._id !== id);
        setShows(newShows);
    }

    function ShowsList(){
        return shows.map((show) => {
            return(
                <Show
                show={show}
                delShow={() => delShow(show._id)}
                key={show._id}
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


