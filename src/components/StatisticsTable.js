import React from "react";
import {useTranslation} from "react-i18next";
import StatisticsTablePlayOff from "./StatisticsTablePlayOff";

const StatisticsTable = ({animate, seasonData, isPlayoff}) => {
    const {t} = useTranslation();

    return (
        <React.Fragment>
            { isPlayoff ?
                <StatisticsTablePlayOff data={seasonData.events} teams={seasonData.teams}/>
                :
                <div className={`table fade ${animate ? 'in' : ''}`}>
                    <div className="table-row table-row-th">
                        <span className="table-cell"/>
                        <span className="table-cell"/>
                        <span className="table-cell"/>
                        <span className="table-cell">{t('Matches')}</span>
                        <span className="table-cell">{t('Win')}</span>
                        <span className="table-cell">{t('Loss')}</span>
                        <span className="table-cell">{t('Win rate')}</span>
                    </div>
                    { seasonData.stata.map((line, index) => {
                        return (
                            <div key={index} className="table-row">
                                <span className="table-cell">{index + 1}.</span>
                                <span className="table-cell">
                                    <img src={line.logoUrl} alt=""/>
                                </span>
                                <span className="table-cell">{line.name}</span>
                                <span className="table-cell">{line.matches}</span>
                                <span className="table-cell">{line.winmatches}</span>
                                <span className="table-cell">{line.lossmatches}</span>
                                <span className="table-cell">{line.winrate}%</span>
                            </div>
                    )})}
                </div>
            }
        </React.Fragment>
    )
}

export default StatisticsTable;