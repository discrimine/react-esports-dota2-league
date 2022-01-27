import moment from "moment";
import {getPlayersLists, getSeasonEvents, getSeasons, getSeasonTable, getSeasonTeams} from "../Api";

export const getInitData = async () => {
    const data = {
        currentSeasonId: '',
        seasonsList: [],
        seasons: {}
    }
    const seasonsData = await getSeasons();
    seasonsData.forEach((season) => {
        data.seasonsList.push({
            id: season.id,
            name: season.name
        });

        if (season.description === 'current') {
            data.currentSeasonId = season.id
        }
        data.seasons[season.id] = {
            seasonName: season.name,
            isPlayOff: checkIsPlayOff(season.slug)
        }
    });

    const seasonData = await prepareSeasonData(data.currentSeasonId);
    Object.keys(seasonData).forEach((key) => {
        data.seasons[data.currentSeasonId][key] = seasonData[key]
    })

    return data;
}

const checkIsPlayOff = (slug) => {
    const slugArr = slug.split('-');
    return slugArr[slugArr.length - 1] === 'off'
}

export const prepareSeasonData = async (seasonId) => {
    const teams = await getSeasonTeamsData(seasonId);
    const events = await getSeasonEventsData(seasonId);
    const stata = await getSeasonStatisticsData(seasonId, teams);

    return {
        teams,
        events,
        stata
    }
}

const preparePlayers = (players) => {
    const result = [];
    for (const [key, value] of Object.entries(players)) {
        if (key !== '0') {
            result.push({
                name: value.name
            })
        }
    }

    return result;
}

const getSeasonTeamsData = async (seasonId) => {
    const seasonTeams = await getSeasonTeams(seasonId);
    const teams = {};

    await Promise.all([...seasonTeams.map((team) => {
        return getPlayersLists(team.lists[0])
            .then((result) => {
                teams[team.id] = {
                    name: team.title.rendered,
                    logoUrl: team['_embedded']['wp:featuredmedia'][0].source_url,
                    players: preparePlayers(result[0].data)
                }
                return {
                    name: team.title.rendered,
                    players: preparePlayers(result[0].data)
                }
            });
    })])

    return teams
}
const sortData = (data) => {
    return data.sort((a,b) => {
        return moment(b.day, 'DD.MM.YYYY').format('X') - moment(a.day, 'DD.MM.YYYY').format('X')
    })
}
const getSeasonEventsData = async (seasonId) => {
    return getSeasonEvents(seasonId)
        .then((result) => {
            return sortData(result);
        })
}

const getSeasonStatisticsData = async (seasonId, teams) => {
    return getSeasonTable(seasonId)
        .then((result) => {
            if (result.length > 0) {
                return prepareStatisticData(result[0].data, teams)
            }
        })
}
const prepareStatisticData = (data, teams) => {
    return Object.keys(teams).map((team, index) => {
        const total = Number(data[team].w)+Number(data[team].l);
        const winrate = Math.floor(Number(data[team].w)*100/total);
        return {
            logoUrl: teams[team].logoUrl,
            scores: data[team].scores,
            name: data[team].name,
            matches: total,
            winmatches: data[team].w,
            lossmatches: data[team].l,
            winrate: typeof winrate ===  'number' || winrate === 0 ? winrate : ''
        }
    }).sort((a, b) => {
        return b.winrate - a.winrate
    })
}