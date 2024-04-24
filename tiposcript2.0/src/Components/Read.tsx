import  { useEffect, useState } from 'react'
import { getItems } from '../Firebase/api'


const Read = () => {
  const [name, setName] = useState([])
useEffect(() => {
  query()
  },[])

  const query = () => {
    getItems().then(setName)
  }
  return (
    <div>
        {name.map((name,i) => <p key={i}>{name.id}--{name.userName}</p>)}
    </div>
  )
}

export default Read