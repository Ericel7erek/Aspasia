import EurosToDolares from './Ejercicios/EurosToDolares'
import Fahrenheit from './Ejercicios/Fahrenheit'
import Rectangulo from './Ejercicios/Rectangulo'
import Images from './Ejercicios/Images'
import Book from './Ejercicios/Book'
import books from './Ejercicios/books'
import MyComponent from './Ejercicios/MyComponent'
import Componente1 from "./components/Componente1";
import Componente2 from "./components/Componente2";
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
  const data = characters.map(character => {
    return (
    <p>{character.name}</p>
  )})
  const changePadre = param =>  alert(param);
  
  return (
  <div>
    {books.map( b=> <Book book={b.title} />)}
    <Book book="Viaje a la luna" />
    <EurosToDolares/>
    <Fahrenheit/>
    <Rectangulo />
    <Images/>
    <MyComponent onSomeEvent={changePadre} />
    <Componente1 calculate={setResult}/>
    <Componente2  result={result}/>
    <h1>{text}</h1>
    <h2>{data}</h2>
    <div><p>par</p></div>
    {100+100}
  </div>
  )
}

export default App
