import React, { useState } from "react";
import axios from 'axios'
export default function UserCreate(){

    const [username, setUsername] = useState('')

    onsubmit = () => {
        const data = {
            username
        }

        axios.post('http://localhost:5000/users/add', data).then((res)=>{
            console.log(res.data)
        }).catch((err) => { console.log(err) })
    }

    return (
        <div>
            <div className='control-group'>
                <label> Username</label>
                <input className='form-control' onChange={e=> setUsername(s => e.target.value)} />
            </div> 
            <div className='control-group mt-3'>
                <button className='btn btn-success' onClick={onsubmit}> Create User </button>
            </div> 
        </div>
    )
}