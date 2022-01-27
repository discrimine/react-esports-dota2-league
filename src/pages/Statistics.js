import React, {useContext, useEffect, useState} from 'react';
import PageWrapper from "../components/PageWrapper";
import {EternityContext} from "../context/EternityAppContext";
import FilterList from "../components/SeasonFilterList";
import {useTranslation} from "react-i18next";

import './Statistics.css';
import Loader from "../components/Loader";
import StatisticsTable from "../components/StatisticsTable";

const Statistics = () => {
    const {t} = useTranslation();
    const {leagueData, isFetchingData, getHistorySeason} = useContext(EternityContext);
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setAnimate(true)
        }, 500)
    }, [])

    const [seasonFilter, setSeasonFilter] = useState(leagueData.currentSeasonId);
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
    }

    return (
        <PageWrapper>
            <h2 className='page-title'>
                {t("Tournament statistics")}
            </h2>
            <p className='page-subtitle'>
                Arcane Masters Winter Series
            </p>
            { seasonFilter && !isFetchingData ?
                <React.Fragment>
                    <div className="filters">
                        <FilterList
                            seasonFilter={seasonFilter}
                            type={'seasons'}
                            list={leagueData.seasonsList}
                            handler={seasonFilterHandler}/>
                    </div>
                    { leagueData.seasons[seasonFilter].stata ?
                        <StatisticsTable animate={animate} seasonData={leagueData.seasons[seasonFilter]} isPlayoff={leagueData.seasons[seasonFilter].isPlayOff}/>
                        :
                        <div className='no-data'>
                            {t('No statistic data')}
                        </div>
                    }
                </React.Fragment>
                :
                <Loader/>
            }
        </PageWrapper>
    )
}

export default Statistics;