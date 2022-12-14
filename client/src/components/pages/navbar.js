import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar(){
    return(
        <div>
            <NavLink className="logo" to="/">
                <div className="logo-title">
                <h1>AniTracker</h1>
                <p>アニメトラッカ</p>
                </div>
                
            </NavLink>
            <div className="navigation-bar">
                <div className="button-row">
                    <NavLink className="nav-button" to="/anime/series">
                        Anime
                    </NavLink>
                    <NavLink className="nav-button" to="/anime/series">
                        Manga
                    </NavLink>
                    <NavLink className="nav-button" to="/anime/series">
                        Watch
                    </NavLink>
                </div>
                <div className="button-row">
                    <NavLink className="nav-button-login" to="/register">
                        Register
                    </NavLink>
                    <NavLink className="nav-button-login" to="/login">
                        Login
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
