import React, { useState } from 'react'
import { useEffect } from 'react'
import { getFilms } from '../../api/api'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const { id } = useParams()
    const [films, setFilms] = useState([])
    
    useEffect(async() => {
    const p = await getFilms(id);
    console.log(p)
    setFilms('ffffffffff',p)
}, [id])
console.log(films);
  return (
    <div></div>
  )
}

export default Profile