import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ButtonHeader from '../components/ButtonHeader';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ChartC from '../components/Chart';

const Success = () => {

    ChartJS.register(ArcElement, Tooltip, Legend);
    const { id } = useParams();
    const [poll, setPoll] = useState([{}]);

    useEffect(() => {
        const getPoll = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API}/${id}`)
                setPoll(res.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        getPoll();
    }, [])

    return (
        <>
            <div className='flx lftSide'>
                <ButtonHeader btnTxt="Home" path="/" />
            </div>
            <div className='bxBrdr mrgnTp clmn'>
                <div className='success'>
                    Thanks for Votting, Here are the results...
                </div>
                <div>
                    <h1>{poll.question}</h1>
                </div>
                <div className='flx votePg mrgnTp'>
                    <ChartC poll={poll} />
                    <div>
                        <h1>{poll.opt1}: </h1>
                        <h1>{poll.opt2}: </h1>
                        {poll.opt3 != "" && <h1>{poll.opt3}: </h1>}
                        {poll.opt4 != "" && <h1>{poll.opt4}: </h1>}
                    </div>
                    <div>
                        <h1>{poll.votOpt1}</h1>
                        <h1>{poll.votOpt2}</h1>
                        {poll.opt3 != "" && <h1>{poll.votOpt3}: </h1>}
                        {poll.opt4 != "" && <h1>{poll.votOpt4}: </h1>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Success