import React from "react";

import './StatisticsTablePlayOff.css'

const StatisticsTablePlayOff = ({data, teams}) => {
    const tableData = new Array(14).fill({
            teamOneLogoUrl: '',
            teamOne: '',
            teamOneScore: '0',
            teamTwoLogoUrl: '',
            teamTwo: '',
            teamTwoScore: '0'
        }
    );
    data.forEach((element) => {
        const eventNum = element.title.rendered.split(' ');

        tableData[parseInt(eventNum[eventNum.length - 1]) - 1] = {
            teamOneLogoUrl: teams[element.teams[0]].logoUrl,
            teamOne: teams[element.teams[0]].name,
            teamOneScore: element.results[element.teams[0]].totalmapwin,
            teamTwoLogoUrl: teams[element.teams[1]].logoUrl,
            teamTwo: teams[element.teams[1]].name,
            teamTwoScore: element.results[element.teams[1]].totalmapwin
        }
    })

    return (
        <div className='table-playoff'>
            {tableData.map((el, index) => {
                return(
                    <div className={`table-playoff-event table-playoff-event-${index + 1}`} key={index}>
                        <table>
                            <tbody>
                            <tr>
                                <td>{el.teamOne}</td>
                                <td>{el.teamOneScore}</td>
                            </tr>
                            <tr>
                                <td>{el.teamTwo}</td>
                                <td>{el.teamTwoScore}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                )
            })}
        </div>
    )
}

export default StatisticsTablePlayOff;