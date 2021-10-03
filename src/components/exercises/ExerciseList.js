import { useEffect, useState } from "react";
import exerciseService from "../../services/exercises";
import Button from "../utils/button.util";
import {Link} from 'react-router-dom';

export default function ExerciseList(){
    const [exercises, setExercises] = useState([]); 

    useEffect(()=>{
        exerciseService().getExercises().then(({data}) => {
            setExercises(data)
            console.log(data);
        })
    }, [setExercises])
    
    return (<div> 
            <table className='table'> 
                <thead>
                    <tr>
                        <th> Username </th>
                        <th> Details </th> 
                        <th> Description </th>
                        <th> Interval </th>
                        <th> Date </th>
                        <th> Action </th>
                    </tr>
                </thead>
                <tbody>
                    {exercises.map(exercise => {
                        return <ExerciseRow exercise={exercise} key={exercise.id} />
                    })}
                </tbody>
            </table>
        </div>)
}

export function ExerciseRow ({exercise}){
    const goToExercise = () => {

    }

    const deleteExercise = () => {
        exerciseService()
    }
    return (
        <tr>
            <td> {exercise.username} </td>
            <td> {exercise.details} </td>
            <td> {exercise.description} </td>
            <td> {exercise.interval} </td> 
            <td> {exercise.date.toString(0, 10)} </td>
            <td> <Link to={`/exercises/${exercise._id}/edit`}> Edit</Link> | <Link href='#' onClick={deleteExercise} color='red'> Delete </Link> </td>
        </tr>
    )   
}