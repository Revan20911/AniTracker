import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "../styles/add.css";
import uniqid from "uniqid";


export default function AddShow(){
    const [show, setShow] = useState({
        id: uniqid(),
        title: "",
        genre: "",
        desc: "",
        cover: "",
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

        await fetch("http://localhost:5000/shows/add", {
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
        <div>
            <form onSubmit={onSubmit}>
            <div className="entry-container">
            <h3>Add Show</h3>
                <input 
                type="text"
                className="input-form"
                id="title"
                value={show.title}
                onChange={(e) => updateShow({title: e.target.value})}
                />
                <input 
                type="text"
                className="input-form"
                id="genre"
                value={show.genre}
                onChange={(e) => updateShow({genre: e.target.value})}
                />
                <input 
                type="text"
                className="input-form"
                id="desc"
                value={show.desc}
                onChange={(e) => updateShow({desc: e.target.value})}
                />
                <input 
                type="text"
                className="input-form"
                id="cover"
                value={show.cover}
                onChange={(e) => updateShow({cover: e.target.value})}
                />
                <input type="submit"/>
            </div>
            </form>
        </div>
    );
}