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
                <h1>Spotify Imposter</h1>
                <div>
                    <button type="button" onClick={handleClick}>
                        Login
                    </button>
                </div>
                <div>
                    <button type="button" onClick={() => window.location.href = loginUrl}>
                        Sign in with Spotify!
                    </button>
                </div>
            </>
        );
}



