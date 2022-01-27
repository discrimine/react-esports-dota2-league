import React, {useEffect, useState} from "react";
import './Team.css';

const Team = ({teamData}) => {
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setAnimate(true)
        }, 500)
    }, [])

    return (
        <div className={`team fade ${animate ? 'in' : ''}`}>
            <img className='team-logo' src={teamData.logoUrl} alt=""/>
            <section className='team-data'>
                <h2 className='team-name'>{teamData.name}</h2>
                <ul className='team-list'>
                    {teamData.players.map((player, index) => {
                        return (
                            <li key={index} className='team-player'>
                                {player.name}
                            </li>
                        )
                    })}
                </ul>
            </section>
        </div>
    )
}

export default Team;