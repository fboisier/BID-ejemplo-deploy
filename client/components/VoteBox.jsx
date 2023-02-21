import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const VoteBox = ({ opt, id, num, actual, total }) => {
    let sum = actual
    const navigate = useNavigate();
    const handleVoto = async () => {
        sum++;
        try {
            const res = await axios.put(`${import.meta.env.VITE_API}/${id}`, { [`votOpt${num}`]: sum, totalVot: total });
            if (res.status === 200) {
                console.log(res)
                navigate(`/success/${id}`)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='voteBox'>
            <h1>{opt}</h1>
            <button onClick={handleVoto}> Vote {opt}</button>
        </div>
    )
}

export default VoteBox