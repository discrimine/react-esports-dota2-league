import React, {useContext} from 'react';

import './Teams.css';

import PageWrapper from "../components/PageWrapper";
import {EternityContext} from "../context/EternityAppContext";
import Team from "../components/Team";
import {useTranslation} from "react-i18next";
import Loader from "../components/Loader";

const Teams = () => {
    const {t} = useTranslation();
    const {leagueData} = useContext(EternityContext);

    return (
        <PageWrapper>
            <h2 className='page-title'>
                {t("Tournament teams")}
            </h2>
            <p className='page-subtitle'>
                Arcane Masters Winter Series
            </p>
            {
                Object.keys(leagueData).length > 0 ?
                    <div className="teams">
                        {
                            Object.keys(leagueData.seasons[leagueData.currentSeasonId].teams).map((team,index) => <Team teamData={leagueData.seasons[leagueData.currentSeasonId].teams[team]} key={index}/>)
                        }
                    </div>
                    :
                    <Loader/>
            }
        </PageWrapper>
    )
}

export default Teams;