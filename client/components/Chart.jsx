import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

const ChartC = ({ poll }) => {

    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
        labels: [`${poll.opt1}`, `${poll.opt2}`, `${poll.opt3}`, `${poll.opt4}`],
        datasets: [
            {
                label: '# of Votes',
                data: [`${poll.votOpt1}`, `${poll.votOpt2}`, `${poll.votOpt3}?`, `${poll.votOpt4}?`],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                ]
            },
        ],
    }

    return (
        <Doughnut data={data} />
    )
}

export default ChartC
