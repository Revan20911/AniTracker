import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "../styles/login.css";

export default function Login(){
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    function onChange(value){
        return setUser((prev)=> {
            return {...prev, ...value};
        });
    }

    async function handleSubmit(e){

        e.preventDefault();
        const newUser = {...user};

        await fetch("https://anime----tracker.herokuapp.com/login" , {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json",
            },

            body: JSON.stringify(newUser),
        })
        .catch(error => {
            console.log(error);
            return;
        })
        setUser({email: "", password: ""});
        navigate("/");
    }

    return(
        <div className="login-wrapper">
            <form onSubmit={handleSubmit}> 
            <input type="text" placeholder="Email" onChange={(e) => onChange({email: e.target.value})} value={user.email}/>
            <input type="text" placeholder="Password" onChange={(e) => onChange({password: e.target.value})} value={user.password}/>
            <div>
            <input type="submit" text="Create Account" className="submit-button"/>
            </div>
            </form>
        </div>
    )
}    
