import React from 'react'
import { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getPeople } from '../../api/api';
import { Container, PageLink } from '../../app/style';
import LoadingScreen from '../Loading/Loading';

const Starwars = () => {
    const {id} = useParams()
    const [people,setPeople] = useState([])
    const [peopleCount,setPeopleCount] = useState()
    const getIdFromUrl = (url) => url.substring(url.lastIndexOf('/', url.lastIndexOf('/') - 1) + 1, url.lastIndexOf('/'));
    const getPaginationLinks = (elementsAmount, elementsPerPage) => {
    const pagesAmount = elementsAmount / elementsPerPage;
    const linksData = []
    for (let i = 1; i < pagesAmount; i++) {
        linksData.push(i);
    }
    return linksData;
};
    useEffect(()=> {
        getPeople(id).then(data=>{
          setPeople(data.results)
          setPeopleCount(data.count)
        })
        
    },[id])

    console.log('2222',people, peopleCount);
  return (
    <div>
    <Container>
        {people.map((person,i)=> 
    <Link key={i} to={`/Profile/${getIdFromUrl(person.url)}`}>
      <p>{person.name}</p>
      <img src={'https://starwars-visualguide.com/assets/img/characters/'+ getIdFromUrl(person.url)+'.jpg'} alt="" /> 
    </Link>
)}
  </Container>
<div style={{ display:'flex', justifyContent:'space-around', backgroundColor: 'black', color: 'white', textDecorationColor: 'white'}}>
{getPaginationLinks(peopleCount,10).map((Page,i)=> <PageLink key={i} to={'/Starwars/' + Page}>{Page}</PageLink>)}
</div>
<LoadingScreen/>
  </div>
  )
}

export default Starwars