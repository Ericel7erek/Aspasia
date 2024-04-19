import React, { useState } from 'react'
import { useEffect } from 'react'
import { getFilms, getInfo, getPeople, getSpecies } from '../../api/api'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const { id } = useParams()
    const [films, setFilms] = useState([])
    const [info, setInfo] = useState([])
    const [species, setSpecies] = useState("")
    useEffect(() => {
       const f = async() =>{
         // 1. Obtener la información del personaje
        getInfo(id).then(data => {
            
                getFilms(data.films).then(d =>{
            setFilms(d)
        })
            setInfo(data)}
        )
        // 2. Obtener las películas del personaje
    
        // 3. Pasar las urls de las películas del personaje al método getFilms()
        getSpecies(id).then(data=> setSpecies(data.name))
        
        
// console.log('rrrrrrrrrrrrrrrrrr', p)
    // console.log(11111,p)
    // setFilms(p.title)
       }
       f();
}, [])
console.log(22222,films, info, species);
  return (
<div style={{display: 'flex', justifyContent: 'space-around'}}>
    <div>
    <h1>Name: {info.name}</h1>
    <p>Height: {info.height}</p>
    <p>Mass: {info.mass}</p>
    <p>Gender: {info.gender}</p>
    <p>Skin Color: {info.skin_color}</p>
    <h2>Films</h2>
    {films.map(film=> <p>{film.title}</p>)}
    <h2>Species</h2>
    <p>{species}</p>
    </div>
    <div>
        <img src={'https://starwars-visualguide.com/assets/img/characters/'+ id+'.jpg'} alt="" /> 
    </div>
</div>
  )
}

export default Profile