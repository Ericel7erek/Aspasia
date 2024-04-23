import { useEffect, useState } from 'react'
import { createItem, deleteItem, getItems } from './app/services/api'

function App() {
  const [userName, setUserName] = useState('')
  const [show, setShow] = useState([])
useEffect(() => {
  query()
  },[])

  const query = () => {
    getItems().then(setShow)
  }

  return (
    <>
    <input type="text" value={userName} onChange={(e)=> setUserName(e.target.value)} />
      <button onClick={async (e)=>{
      e.preventDefault()
      await createItem({ userName })
      query();
      setUserName('');
      }}>Save</button>
      <button onClick={async ()=> {
        await deleteItem(userName)
        query();
        setUserName('');
      }
        } >Borrar</button>
    {/* <button onClick={()=> getItems().then(setShow)}>Show</button> */}
    {show.map((item,i)=> <p key={i}>{item.id}--{item.userName}</p>)}
    </>
  )
}

export default App
