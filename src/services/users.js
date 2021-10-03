import axios from 'axios'
export default function userService(){

    const getUsers = () => {
        return axios.get('http://localhost:5000/users')
    }

    return {
        getUsers
    }
}