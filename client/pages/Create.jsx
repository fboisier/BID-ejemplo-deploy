import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import ButtonHeader from '../components/ButtonHeader';
import PollForm from '../components/PollForm';

const Create = () => {

    const initialValues = {
        question: "",
        opt1: "",
        opt2: "",
        opt3: "",
        opt4: ""
    }

    const createPoll = async (values, actions) => {
        try {
            const res = await axios.post(`${import.meta.env.VITE_API}/new`, values);
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    text: `Se ha agregado ${res.data.question} perfectamente!`,
                });
                actions.resetForm(initialValues);
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                text: `Error: ${error?.response?.data?.message || error.message}`,
            })
        }
    }

    return (
        <>
            <div className='flx lftSide'>
                <ButtonHeader btnTxt="Back" path="/" />
            </div>
            <PollForm initialValues={initialValues}
                btnTxt="Submit"
                onSubmit={createPoll}
            />
        </>
    )
}

export default Create