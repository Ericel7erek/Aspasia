import axios from 'axios'

const instance = axios.create({baseURL: 'https://api.chucknorris.io/'})


export const getJokes =async (category) =>{
    const d =  await instance.get(`/jokes/random?category=${category}`);
    return d.data.value;
}