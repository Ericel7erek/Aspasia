import axios from 'axios'

const instance = axios.create({baseURL: 'https://swapi.dev/api'})

export const getPeople =async (id=1) =>{
    const d =  await instance.get(`/people/?page=${id}`);
    return d.data;
}


export const getFilms = async (urls) =>{
    const data = await Promise.all(urls.map(async (url) => {
     const r = await axios.get(url);
     console.log(r)
     return r.data;
     
}))

console.log('ñññññññññññññññññ',data)
return data;
}
export const getFilm = async (id) =>{
    const d= await instance.get(`/films/${id}/`);
}
export const getInfo = async (id) =>{
    const d= await instance.get(`/people/${id}`);
    return d.data
}

export const getSpecies = async (id) =>{
    const d= await instance.get(`species/${id}/`)
    return d.data
}