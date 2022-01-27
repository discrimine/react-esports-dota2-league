import React, {createContext, useState, useMemo, useEffect, useCallback} from 'react';
import {getInitData, prepareSeasonData} from './bl';
import {getSponsor} from "../Api";

const EternityContext = createContext({});

const EternityProvider = (props) => {

    const [leagueData, setLeagueData] = useState({});
    const [isFetchingData, setIsFetchingData] = useState(false);
    const [sponsorData, setSponsorData] = useState([])

    const getHistorySeason = useCallback(async (seasonId) => {
        setIsFetchingData(true);
        return prepareSeasonData(seasonId).then((result) => {
            const newState = leagueData;
            Object.keys(result).forEach((key) => {
                newState.seasons[seasonId][key] = result[key]
            })
            setLeagueData(newState);
        }).then(() => {
            setIsFetchingData(false);
            return {status: 'updated'}
        })
    }, [leagueData])

    const appMemo = useMemo(() => ({
        sponsorData,
        leagueData, setLeagueData,
        isFetchingData, setIsFetchingData,
        getHistorySeason
    }), [
        sponsorData,
        leagueData, setLeagueData,
        isFetchingData, setIsFetchingData,
        getHistorySeason
    ]);

    useEffect( () => {

        getSponsor().then(result => {
            if (result.length > 0) {
                let sponsorsData = [].map(sponsor => {
                    return {
                        title: '',
                        logoUrl: ''
                    }
                })
                setSponsorData(sponsorsData)
            }
        })
        getInitData().then(data => setLeagueData(data))
    }, []);

    return (
        <EternityContext.Provider value={appMemo}>
            {props.children}
        </EternityContext.Provider>
    )
}

export  {EternityContext, EternityProvider};