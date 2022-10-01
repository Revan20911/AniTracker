import React from "react";
import "../styles/series.css"
import { useParams } from "react-router-dom";

export default function Series(){
    const {id} = useParams();

    const [info, setInfo] = React.useState([]);

    React.useEffect(()=>{
        async function fetchSeriesInfo(){
            const response = await fetch(`https://anime----tracker.herokuapp.com/anime/series/${id}`)
            const seriesInfo = await response.json();

            setInfo(seriesInfo);
        }
        fetchSeriesInfo();
    })

    return(
        <div className="series-wrapper">
            <h1>{info.title}</h1>
            <div className="series-sub-content-wrapper">
                <div className="series-sub-content">
                    <img src={info.img} alt="Series_cover"/>
                    <h4>Information</h4>
                    <div className="series-information">
                        <div className="item-info">Episodes:  
                        <span className="info-text">  
                        {info.episodes}
                        </span>
                    </div>
                    </div>
                    <h4>Statistics</h4>
                    <h4>External Links</h4>
                </div>
                <div className="info-wrapper">
                <div className="ranking">
                <div className="stat-score">
                        </div>
                    <div className="ranking-stats">
                       
                        <div className="stat-titles">
                        <h4>Ranked: N/A</h4>
                        <h4>Popularity: N/A</h4>
                        <h4>Members: N/A</h4>
                        </div>
                    </div>
                    <iframe title={info.title} className="ranking-pv" src="https://www.youtube.com/embed/WFVY88Urzuc?enablejsapi=1&wmode=opaque&autoplay=1"></iframe>
                </div>
                <div className="description">
                    <h3>Synopsis</h3>
                    <p>{info.desc}</p>
                </div>
                <div className="description">
                    <h3>Characters & Voice actors</h3>
                </div>
                <div className="description">
                    <h3>Reviews</h3>
                    <h3>Images</h3>
                </div>
                </div>
            </div>
        </div>
    )
}
