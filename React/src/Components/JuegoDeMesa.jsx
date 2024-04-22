import React, { useEffect, useState } from 'react'
import { Board, Chip, Pos,  } from '../app/style'
import data from '../assets/Juegoç/assets/data/data.json'
const JuegoDeMesa = () => {
    const [height, setHeight] = useState()
    const [width, setWidth] = useState()
    const [players, setPlayers] = useState([{name: "player1", pos: 0, x: 0, y: 0, color:"blue"}, {name: "player2", pos: 0, x: 0, y:0, color:"red"}])
    const [turn, setTurn] = useState(0)
    const rollTheDice = () => {
        const t = turn < 1 ? turn + 1 : 0
        const n = Math.floor(Math.random() * 6) + 1
        const playerPos = n + players[t].pos;
        console.log(n, playerPos,t);
        
        if(playerPos > 68){
            alert(`Ganaste ${players[t].name}`) 
        } else {
            const {x, y} = data[playerPos]
            setTurn(t)
            setPlayers(players.map((p, i) => i === t? {...p, pos: playerPos, x, y} : p))
    }}
    const calculateSceneDimensions = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;

        if (w > h) {
            setWidth(h * 0.9);
            setHeight(h * 0.9);
        } else {
            setHeight(w * 0.9);
            setWidth(w * 0.9);
        }
    }
    console.log(players);
    useEffect(() => {
        window.addEventListener('resize', calculateSceneDimensions);
        calculateSceneDimensions();
    }, [])
  return (
    <Board width={width} height={height}>
    <button onClick={()=> rollTheDice()}>Roll the Dice</button>
    {data.map((item, index) => {return <Pos key={index} width={item.width} height={item.height} x={item.x} y={item.y}></Pos>})}
    {players.map((player, index) => {return <Chip key={index} x={player.x} y={player.y} color={player.color}></Chip>})}
    </Board>
  )
}

export default JuegoDeMesa