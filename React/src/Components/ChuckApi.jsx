import React, { useEffect, useState } from 'react'
import { getJokes } from '../api/apiChuck'
const ChuckApi = () => {
    const [url, setUrl] = useState([])
    const [name, setName] = useState([])
    useEffect(()=>{
    getJokes(name).then(data => setUrl(data))
    }
    ,[name])
  return (
    <div>
  <ul>
    <li onClick={()=>setName('animal')}>animal</li>
    <li onClick={()=>setName('career')}>career</li>
    <li onClick={()=>setName('dev')}>dev</li>
    <li onClick={()=>setName('history')}>history</li>
  </ul>
  <p>{url}</p>
</div>
  )
}

export default ChuckApi