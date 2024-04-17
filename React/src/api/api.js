import axios from 'axios'

const instance = axios.create({baseURL: 'https://swapi.dev/api'})

export const getPeople =async (id=1) =>{
    console.log('111111111',id)
    const d =  await instance.get(`/people/${id}`);
    console.log('dddddddddddd',d)
    return d.data;
}

export const getFilms = async (id) =>{
    const d =  await instance.get(`/films/${id}`);
    console.log('ppppppppp',d)
    return d.data
}