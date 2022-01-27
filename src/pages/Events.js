import React, {useContext, useEffect, useState} from 'react';
import moment from 'moment';
import './Events.css';

import {EternityContext} from "../context/EternityAppContext";
import Event from "../components/Event";
import PageWrapper from "../components/PageWrapper";
import SeasonFilterList from "../components/SeasonFilterList";
import {useTranslation} from "react-i18next";
import TeamFilterList from "../components/TeamFilterList";
import Loader from "../components/Loader";

moment.suppressDeprecationWarnings = true;

const Events = () => {
    const {t} = useTranslation();
    const {leagueData, isFetchingData, getHistorySeason} = useContext(EternityContext);

    const [seasonFilter, setSeasonFilter] = useState(leagueData.currentSeasonId);
    const [teamFilter, setTeamFilter] = useState('all');

    useEffect(() => {
        if (Object.keys(leagueData).length > 0) {
            setSeasonFilter(leagueData.currentSeasonId)
        }
    }, [leagueData])

    const seasonFilterHandler = (seasonId) => {
        if (seasonId !== seasonFilter) {
            if (!leagueData.seasons[seasonId].events) {
                getHistorySeason(seasonId).then((result) => {
                    if (result.status === 'updated') {
                        setSeasonFilter(seasonId);
                    }
                })
            } else {
                setSeasonFilter(seasonId);
            }
        }
        setTeamFilter('all')
    }

    const teamFilterHandler = (teamId) => {
        if (teamId !== teamFilter) {
            setTeamFilter(teamId)
        }
    }

    return (
        <PageWrapper>
            <h2 className='page-title'>
                {t("Tournament matches")}
            </h2>
            <p className='page-subtitle'>
                {t("TournamentTitle")}
            </p>
            { seasonFilter && !isFetchingData ?
                <React.Fragment>
                    <div className="filters">
                        <SeasonFilterList
                            seasonFilter={seasonFilter}
                            type={'seasons'}
                            list={leagueData.seasonsList}
                            handler={seasonFilterHandler}/>
                        <TeamFilterList
                            teamFilter={teamFilter}
                            list={leagueData.seasons[seasonFilter].teams}
                            handler={teamFilterHandler}/>
                    </div>
                    {leagueData.seasons[seasonFilter].events && leagueData.seasons[seasonFilter].events.length > 0 ?
                            <div className='events'>
                                { leagueData.seasons[seasonFilter].events.map((event, index) => {
                                    if (teamFilter === 'all') {
                                        return <Event eventData={event} teams={leagueData.seasons[seasonFilter].teams} key={index}/>
                                    } else if (event.teams.includes(parseInt(teamFilter))) {
                                        return <Event eventData={event} teams={leagueData.seasons[seasonFilter].teams} key={index}/>
                                    }
                                })}
                            </div>
                            :
                            <div className='no-data'>
                                {t('No matches data')}
                            </div>
                    }
                </React.Fragment>
                :
                <Loader/>
            }
        </PageWrapper>
    )
}

export default Events;