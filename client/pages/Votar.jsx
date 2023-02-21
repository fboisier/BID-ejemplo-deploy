import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ButtonHeader from '../components/ButtonHeader'
import VoteBox from '../components/VoteBox'

const Votar = () => {
    const { id } = useParams();
    const [poll, setPoll] = useState({})

    useEffect(() => {
        const getPolls = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API}/${id}`)
                setPoll(res.data)
                total = poll.totalVot;
            } catch (error) {
                console.log(error.message)
            }
        }
        getPolls();
    }, [])

    let total = (poll.votOpt1 + poll.votOpt2 + poll.votOpt3 + poll.votOpt4);

    return (
        <>
            <div className='flx lftSide'>
                <ButtonHeader btnTxt="Back" path="/" />
            </div>
            <div className='bxBrdr mrgnTp clmn'>
                <div>
                    <h1>{poll.question}</h1>
                </div>
                <div className='flx votePg'>
                    <VoteBox opt={poll.opt1} num={1} id={id} total={total} actual={poll.votOpt1} />
                    <VoteBox opt={poll.opt2} num={2} id={id} total={total} actual={poll.votOpt2} />
                </div>
                <div className='flx votePg'>
                    {poll.opt3 != "" && <VoteBox opt={poll.opt3} num={3} id={id} actual={poll.votOpt3} total={total} />}
                    {poll.opt3 != "" && <VoteBox opt={poll.opt4} num={4} id={id} actual={poll.votOpt4} total={total} />}
                </div>
            </div>
        </>
    )
}

export default Votar