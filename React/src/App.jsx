import EurosToDolares from './Ejercicios/EurosToDolares'
import Fahrenheit from './Ejercicios/Fahrenheit'
import Rectangulo from './Ejercicios/Rectangulo'
import Images from './Ejercicios/Images'
import Book from './Ejercicios/Book'
import books from './Ejercicios/books'
import MyComponent from './Ejercicios/MyComponent'
import Componente1 from "./Components/Componente1";
import Componente2 from "./Components/Componente2";
import NewComponent from './Ejercicios/NewComponent'
import { useState } from 'react'
import { GlobalStyle, StyleComponent1, StyleComponent2 } from './app/style'
import Router from './app/Router'

const App = () => {

  const text = <p>Hola</p>

  const [result, setResult] = useState(0);
  const characters =[
    {
      name: "John",
      age: 34,
    },
    {
      name: "Jane",
      age: 24,
    },
    {
      name: "Joe",
      age: 32,
    }
  ]
  // const data = characters.map(character => {
  //   return (
  //   <p>{character.name}</p>
  // )})
  // const changePadre = param =>  alert(param);
  // const [value, setValue] = useState(0);
  return (
  <div>
    <GlobalStyle>

    </GlobalStyle>
    <Router/>
    {/* <Starwars/> */}
    {/*<Api/>
    <Cuenta/>
    <Training/>
    <Trivia/>
    <Teatro/>
    <GlobalStyle />
    <StyleComponent1/>
    <StyleComponent2><p>AAAAA</p></StyleComponent2> 
    <Styledcomponents/> 
    {books.map( b=> <Book book={  b.title} />)} 
    <Book book="Viaje a la luna" />
    <EurosToDolares/>
    <Fahrenheit/>
    <Rectangulo />
    <Images/>
    <MyComponent onSomeEvent={changePadre} />
    <Componente1 calculate={setResult}/>
    <Componente2  result={result}/>
    <NewComponent NewValue={setValue}/> 
    {value}
    <h1>{text}</h1>
    <h2>{data}</h2>
    <div><p>par</p></div> 
     {100+100} */}
  </div>
  )
}

export default App
