import React from "react";
import "../styles/list.css"
import { NavLink } from "react-router-dom";

export default function SeriesList(){

    const [series, setSeries] = React.useState([]);

    React.useEffect(() => {
        async function fetchSeries(){
            const response = await fetch("http://localhost:5000/anime/series");
            const Series = await response.json();

            setSeries(Series);

        }
        fetchSeries();
    })

    function buildList(){
        return series.map((show) => {
            return <NavLink className="navlink" to={"/anime/series/" + show._id + "/" + show.title} key={show._id}>
                <div className="series-card">
                <img src={show.img}></img>
                <div className="series-card-info">
                <h3>{show.title}</h3>
                </div>
            </div>
            </NavLink>
        })
    }

    return(
        <div className="contentwrapper">
            <div className="series-list">
                {buildList()}
            </div>
        </div>
    )
}