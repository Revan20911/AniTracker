import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar(){
    return(
        <div>
            <div className="logo">
                <h1>AniTracker</h1>
                <p>アニメトラッカ</p>
            </div>
            <div className="navigation-bar">
                <div className="button-row">
                    <NavLink className="nav-button" to="/shows/add">
                        Add Show
                        </NavLink>
                    <NavLink className="nav-button" to="/shows">
                        All Shows
                    </NavLink>
                </div>
            </div>
        </div>
    )
}