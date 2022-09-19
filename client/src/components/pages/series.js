import React from "react";
import "../styles/series.css"
import { useParams } from "react-router-dom";

export default function Series(){
    const {id, title} = useParams();
    return(
        <div className="series-wrapper">
            <h1>{title}</h1>
            <div className="series-sub-content-wrapper">
                <div className="series-sub-content"></div>
            </div>
            
        </div>
    )
}
