import React, { useEffect, useRef, useState } from "react"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import exerciseService from "../../services/exercises";
import userService from "../../services/users";

export default function ExerciseCreate(){
    const [username, setUsername] = useState(''); 
    const [description, setDescription] = useState('')
    const [details, setDetails] = useState('')
    const [date, setDate] = useState(new Date())
    const [duration, setDuration] = useState(0)
    const [users, setUsers] = useState(['Michel', 'Yossa', 'Ngambous'])

    useEffect(() => {
        userService().getUsers().then(({data}) => {
            setUsers(data.map(e => e.username))
        })
    }, [setUsers])

    onsubmit = (e) => {

        const exercise = {
            username,
            description, 
            details, 
            date,
            duration
        }

        exerciseService().addExercise(exercise).then((res) => {
            console.log(res)
        }).catch(err => console.log(err))

       // window.location = '/'
    }

    return (<div> 
            <div className='form-group'>
                <label> username </label>
                <select className='form-control' onChange={(e) => {setUsername(s=>e.target.value)}} >
                    {users.map((user) => {
                        return (
                            <option value={user} key={user}> {user} </option>
                        )
                    })}
                </select>
            </div>
            <div className='form-group'>
                <label> Description </label>
                <input className='form-control' onChange={e => {setDescription(s=>e.target.value)}} />
            </div>
            <div className='form-group'>
                <label> Interval </label>
                <input className='form-control' onChange={e => {setDuration(s=>e.target.value)}} />
            </div>
            <div className='form-group'>
                <label> Details </label>
                <textarea className='form-control' onChange={e => {setDetails(s=>e.target.value)}} />
            </div>

            <div className='form-group'>
                <label> Date </label>
                <DatePicker value={date.toDateString()}  onChange={setDate} />
            </div>
            <br />
            <button className='btn btn-success' onClick={onsubmit}> Submit </button>

    </div>)
}