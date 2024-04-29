import  { useEffect, useState } from 'react'
import { getItems, todo } from '../Firebase/api'
import { Link } from 'react-router-dom'


const Read = () => {
  const [name, setName] = useState<todo[]>([])

useEffect(() => {
  query()
  },[])

  const query = () => {
    getItems().then(setName)
  }
  return (
    <div>
        {name.map((name:todo,i:number) => <p key={i}><Link to={`/edit/${name.id}`}>{name.id}</Link>--{name.userName}--{name.date}</p>)}
    </div>
  )
}

export default Read