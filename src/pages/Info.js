import React from 'react';
import './Info.css';

import PageWrapper from "../components/PageWrapper";
import {useTranslation} from "react-i18next";

const Info = () => {
    const {t} = useTranslation();

    return (
        <PageWrapper>
            <h2 className='page-title'>
                {t("Information about the tournament")}
            </h2>
            <div className='info'>
                <p>
                    {t('Lol')}
                </p>
                 
                <p>{t('info')}</p>
                <p>{t('info2')}</p>
                <p>{t('info3')}</p>
                <p>{t('info4')}</p>

                <p>{t('League format')}:</p>
                <p>{t('Group stage')}: {t('8 teams play each with twice games, 14 BO3 matches are to be played by each of the league participants.')}</p>
                <p>{t('According to the results of the group stage, the teams that take 1-4 places will get into the upper bracket.')}</p> 
                <p>{t('5-6 place to the bottom, 7th-8th places reserve the right to participate in the next stage.')}</p> 
                <p>{t('Play-off')}:{t('6 teams play in double elimination, bo3.')}</p>
                <p>{t('The final of the tournament will be held in bo5 format.')}</p>
                <p>
                    {t('1st place - 330 points + $1500')}<br/>
                    {t('2nd place - 200 points + $1000')}<br/>
                    {t('3rd place - 140 points + $500')}<br/>
                    {t('4th place - 90 points')}<br/>
                    {t('5-8th place - 45 points')}<br/>
                    {t('9-12 place - 40 points')}<br/><br/>
                    {t('Super final prize fund')} <br/>
                    {t('finalPlace1')}<br/>
                    {t('finalPlace2')}<br/>
                    {t('finalPlace3')}<br/>
                    {t('finalPlace4')}<br/>
                    <br/>
                    {t('Will be broadcast on the twitch platform channels')}:<br/>
                    <a target="_blank" href="https://www.twitch.tv/arcanemastersleague">https://www.twitch.tv/arcanemastersleague</a>
                </p>
            </div>
        </PageWrapper>
    )
}

export default Info;