import React from 'react';
import './Lobby.css';
import { useNavigate } from 'react-router-dom';


export default function Lobby(){

     const navigate = useNavigate();
            const handleClick = () => {
                navigate('/Waiting')
            };

        return (
            <>
                <div className="lobby">
                    <h1>Lobby Settings</h1>

                    <div className="settings-box">
                        <div className="setting">
                            <label>Lobby Name</label>
                                <input type="text" placeholder="My Lobby" />
                        </div>

                        <div className="setting">
                            <label>Max Players</label>
                                <input type="number" min="2" max="10" defaultValue="4" />
                        </div>

                        <div className="setting">
                            <label>Max Rounds</label>
                                <input type="number" min="3" max="15" defaultValue="5" />
                        </div>

                        <button className="create-btn" onClick={handleClick}>
                            Create Lobby
                        </button>
                    </div>
                </div>
            </>
    )
}
