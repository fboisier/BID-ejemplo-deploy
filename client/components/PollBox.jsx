import React from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

const PollBox = ({ poll }) => {
    dayjs.extend(relativeTime);
    const timePublished = dayjs(poll.createdAt).fromNow();
    return (
        <div className='boxPoll flx pdng'>
            <div className='flx1'>
                <img className='stadisticSmall' srcSet='../src/assets/trtStd.png' />
            </div>
            <div className='description clmn flx3'>
                <Link to={`/polls/${poll._id}`}> <h4>{poll.question}</h4></Link>
                <div>
                    <p>{poll.opt1}: {poll.votOpt1} | {poll.opt2}: {poll.votOpt2}</p>
                    {poll.opt3 != "" && <span>{poll.opt3}: {poll.votOpt3} | </span>}
                    {poll.opt4 != "" && <span>{poll.opt4}: {poll.votOpt4}</span>}
                    <p className='timeP'>{timePublished}</p>

                </div>
            </div>
        </div>
    )
}

export default PollBox