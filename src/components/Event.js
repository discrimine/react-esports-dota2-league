import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import './Event.css';

const Event = ({eventData, teams}) => {
    const {t} = useTranslation();
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setAnimate(true)
        }, 500)
    }, [])

    return (
        <div className={`event fade ${animate ? 'in' : ''}`}>
            <div className='event-teams'>
                {eventData.teams.map((team, index) => {
                    return(
                        <div key={index} className={`event-team ${index === 0 ? 'left' : 'right'}`}>
                            <span>
                                <img src={teams[team].logoUrl} alt=""/>
                            </span>
                            <span>{teams[team].name}</span>
                            <span>{eventData.results[team].rating ? eventData.results[team].rating : '0'}</span>
                            {
                                index === 0 ? <div className='event-date'>
                                {t('Match day')}: {eventData.day}
                            </div> : ''
                            }
                            
                        </div>
                    )
                })}
            </div>
            {/* <div className='event-results'>
                <div className='event-results-row'>
                    <span>{eventData.results[eventData.teams[0]].firstmapscores}</span>
                    <span>
                        {eventData.results[eventData.teams[0]].firstmap !== '' ? eventData.results[eventData.teams[0]].firstmap : eventData.results[eventData.teams[1]].firstmap}
                    </span>
                    <span>{eventData.results[eventData.teams[1]].firstmapscores}</span>
                </div>
                <div className='event-results-row'>
                    <span>{eventData.results[eventData.teams[0]].secondmapscores}</span>
                    <span>
                        {eventData.results[eventData.teams[0]].secondmap !== '' ? eventData.results[eventData.teams[0]].secondmap : eventData.results[eventData.teams[1]].secondmap}
                    </span>
                    <span>{eventData.results[eventData.teams[1]].secondmapscores}</span>
                </div>
                <div className='event-results-row'>
                    <span>{eventData.results[eventData.teams[0]].thirdmapscores}</span>
                    <span>
                        {eventData.results[eventData.teams[0]].thirdmap !== '' ? eventData.results[eventData.teams[0]].thirdmap : eventData.results[eventData.teams[1]].thirdmap}
                    </span>
                    <span>{eventData.results[eventData.teams[1]].thirdmapscores}</span>
                </div>
            </div> */}
        </div>
    )
}

export default Event