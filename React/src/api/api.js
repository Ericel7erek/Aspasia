import axios from 'axios'

const instance = axios.create({baseURL: 'https://swapi.dev/api'})

export const getPeople =async () =>{
    const d =  await instance.get('/people');
    return d.data.results;
}