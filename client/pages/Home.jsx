import React, { useEffect, useState } from 'react'
import axios from 'axios'


import ButtonHeader from '../components/ButtonHeader';
import { Link } from 'react-router-dom';
import PollBox from '../components/PollBox';

const Home = () => {
  const [polls, setPolls] = useState([{}]);
  const [pollsTop, setPollsTop] = useState([{}]);

  useEffect(() => {
    const getPolls = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API}`)
        const res2 = await axios.get(`${import.meta.env.VITE_API}/top`)
        setPollsTop(res2.data)
        setPolls(res.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    getPolls();
  }, [])

  return (
    <>
      <ButtonHeader btnTxt="Create your own Poll" path="/new" />
      <div className='flx'>
        <div className='bxBrdr topPanel'>
          <h1>Top 3 Polls</h1>
          {pollsTop.map((poll, idx) => {
            return (
              <PollBox key={idx} poll={poll} />
            )
          })}
        </div>
        <div className='bxBrdr recent'>
          <h1>Recent Polls</h1>
          {polls.map((poll, idx) => {
            return (
              <PollBox key={idx} poll={poll} />
            )
          })}
        </div>
      </div>
    </>
  )

}

export default Home