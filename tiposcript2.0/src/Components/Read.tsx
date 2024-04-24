import  { useEffect, useState } from 'react'
import { getItems, todo } from '../Firebase/api'


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
        {name.map((name:todo,i) => <p key={i}>{name.id}--{name.userName}</p>)}
    </div>
  )
}

export default Read