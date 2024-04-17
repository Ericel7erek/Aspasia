import React from 'react'
import { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getPeople } from '../../api/api';

const Starwars = () => {
    const {id} = useParams()
    const [people,setPeople] = useState([])
    const getIdFromUrl = (url) => url.substring(url.lastIndexOf('/', url.lastIndexOf('/') - 1) + 1, url.lastIndexOf('/'));
  
    useEffect(()=> {
        getPeople(id).then(data=>setPeople(data.results))
    },[])

    console.log(people);
  return (
    <div style={{display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gap: '0.5rem'}}>
        {people.map(person=> 
    <Link to={`/Profile/${getIdFromUrl(person.url)}`}>
      <p>{person.name}</p>
      <img src={'https://starwars-visualguide.com/assets/img/characters/'+ getIdFromUrl(person.url)+'.jpg'} alt="" /> 
    </Link>
)}
    </div>
  )
}

export default Starwars