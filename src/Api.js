import axios from 'axios';

const apiCallGet = (url, params = {}) => axios.get(url, params).then(response => response.data);

//const origin url = 'http://wordpress';
const url = 'http://test3.e-league.pro';

export const getSeasons = params => apiCallGet(url+'/wp-json/sportspress/v2/seasons?per_page=100', params);
export const getSeasonTeams = seasonId => apiCallGet(url+`/wp-json/sportspress/v2/teams?_embed&seasons[]=${seasonId}&per_page=100`);
export const getPlayersLists = listId => apiCallGet(url+`/wp-json/sportspress/v2/lists?include[]=${listId}`);
export const getSeasonTable = seasonId => apiCallGet(url+`/wp-json/sportspress/v2/tables?seasons[]=${seasonId}`);
export const getSponsor = () => apiCallGet(url+`/wp-json/sportspress/v2/staff?_embed`);

const makeArrPromises = (seasonId, totalPages) => {
    const reqPromises = [];
    for (let i = 2; i <= parseInt(totalPages); i++) { 
        reqPromises.push(axios.get(url+`/wp-json/sportspress/v2/events?seasons[]=${seasonId}&per_page=100&page=${i}`))
    }
    return reqPromises;
}

export const getSeasonEvents = seasonId => {
    return axios.get(url+`/wp-json/sportspress/v2/events?seasons[]=${seasonId}&per_page=100&page=1`)
        .then((response) => {
            let firstCallData = response.data;

            return Promise.all(makeArrPromises(seasonId, response.headers['x-wp-totalpages']))
                .then((responses) => {
                    responses.forEach((response) => {
                        firstCallData.push(response.data)
                    })
                    return firstCallData.flat();
                })
        })
}
