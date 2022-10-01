import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "../styles/add.css";

import SubmitButton from "../utils/button";


export default function AddShow(){
    const [show, setShow] = useState({
        title: "",
        genre: "",
        desc: "",
        cover: "",
        // currentlyAiring: "",
        // episodes: "",
        // completed: "",
        // rating: "",

    });

    const navigate = useNavigate();
    function updateShow(value){
        return setShow((prev) => {
            return {...prev, ...value};
        });
    }
    async function onSubmit(e){
        e.preventDefault();

        const newShow = {...show};

        await fetch("https://anime----tracker.herokuapp.com/shows/add", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(newShow),
        })
        .catch(error => {
            console.log(error);
            return;
        });
        console.log(newShow);
        setShow({title: "", genre:"", desc: "", cover: ""});
        navigate("/shows");
    }

    return(
        <div className="input-form-wrapper">
            <form onSubmit={onSubmit}>
            <div className="entry-container">
            <h3>Add Show</h3>
                <label target="Title">Title</label>
                <input 
                type="text"
                className="input-form"
                id="title"
                value={show.title}
                onChange={(e) => updateShow({title: e.target.value})}
                />
                <label target="Genre">Genre</label>
                <input 
                type="text"
                className="input-form"
                id="genre"
                value={show.genre}
                onChange={(e) => updateShow({genre: e.target.value})}
                />
                <label target="desc">Description</label>
                <textarea
                type="text"
                className="input-form"
                id="desc"
                value={show.desc}
                onChange={(e) => updateShow({desc: e.target.value})}
                />
                <label target="Cover">Cover Image URL</label>
                <input 
                type="text"
                className="input-form"
                id="cover"
                value={show.cover}
                onChange={(e) => updateShow({cover: e.target.value})}
                />
                <SubmitButton type="submit" className={"edit"} text="Submit"/>
            </div>
            </form>
        </div>
    );
}
