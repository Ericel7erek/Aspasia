import React from 'react'
import { useEffect, useState } from 'react'
import { P } from '../app/style'

const Api = () => {
    const [news, setNews] = useState([])
    const [url, setUrl] = useState('')
    const ApiKey= "ab1abf526a814f8a851896cb370e2f0d"
    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=eg&apiKey=${ApiKey}`).then(res => res.json()).then(data => {
            setNews(data.articles)
    })}, [])
    console.log(22222222222,news);
  return (
    <div>{news.map((u,i) => 
    <div key={i}>
        <h1>{u.author}</h1>
        <p >{u.title}</p>
        <a href='https://m.youm7.com/story/' target="pp" >{u.url}</a>

        <iframe name="pp"  frameborder="0"></iframe>
    </div>
)}</div>

  )
}

export default Api