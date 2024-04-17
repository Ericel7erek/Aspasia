import React from 'react'
import { useEffect,useState } from 'react'
import { Container } from '../app/style'

const Starwars = () => {
    const [people,setPeople] = useState([])
    const [images,setImages] = useState([])
    const getIdFromUrl = (url) => url.substring(url.lastIndexOf('/', url.lastIndexOf('/') - 1) + 1, url.lastIndexOf('/'));
    console.log(getIdFromUrl('https://swapi.dev/api/people/'));
    useEffect(()=> {fetch('https://swapi.dev/api/people/').then(res=>res.json()).then(data=>setPeople(data.results))
    fetch('https://starwars-visualguide.com/assets/img/characters/'+'1'+'.jpg').then(data=>setImages(data.url))
    },[])
    console.log(people);
    console.log(images);
  return (
    <div>
        <h1>Starwars</h1>
        <img src={images} alt="" height={'200px'} />
        {people.map(person=> 
            <p>{person.name}</p>
            )}
    </div>
  )
}

export default Starwars