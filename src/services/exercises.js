import axios from 'axios' 
export default function exerciseService(){

    const getExercises = () => {
        return axios.get('http://localhost:5000/exercises')
    }

    const addExercise = (data) => {
        return axios.post('http://localhost:5000/exercises/add', data)
    }

    const getExercise = (id) => {
        return axios.get(`http://localhost:5000/exercises/${id}`)
    }

    const deleteExercise = (id) => {
        return axios.delete(`http://localhost:5000/exercises/${id}/delete`)
    }

    const updateExercise = (id) => {
        return axios.post(`http://localhost:5000/exercises/${id}/update`)
    }

    return {
        getExercises, 
        addExercise,
        deleteExercise,
        updateExercise
    }
}