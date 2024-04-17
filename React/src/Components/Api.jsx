import React from 'react'
import { useEffect, useState } from 'react'
import { getPeople } from '../api/api'
import { getJokes } from '../api/apiChuck'


const Api = () => {
    const [news, setNews] = useState([])
    const [url, setUrl] = useState([])
    const [name, setName] = useState('')
    const ApiKey= "ab1abf526a814f8a851896cb370e2f0d"
    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=eg&apiKey=${ApiKey}`).then(res => res.json()).then(data => {
            setNews(data.articles)
    })}, [])
    console.log(22222222222,news,url);
  return (
    <div style={{display:'flex', flexDirection: 'column' }}>{news.map((u,i) => 
    <div key={i}>
        <h1>{u.author}</h1>
        <h2 >{u.title}</h2>
        <a href={u.url}><button>Show Post</button></a>
    </div>
)}</div>
  )
}

export default Api