import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { loginUrl } from './Spotify';


export default function Home(){
    
        const navigate = useNavigate();
        const handleClick = () => {
            navigate('/Lobby')
        };
    

        return (
            <>
                <h1>Login</h1>
                <div>
                    <button type="button" onClick={handleClick}>
                        Login
                    </button>
                </div>
                <div>
                    <a href={loginUrl} id="signInButton">Sign in with Spotify!</a>
                </div>
            </>
        );
}



