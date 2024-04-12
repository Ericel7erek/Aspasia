import React, { useState } from 'react'
import Questions from '../assets/data/questions'
import { PopUp } from '../app/style'

const Trivia = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    console.log(Questions[currentIndex].answers);
    return (
    <div style={{display:'flex', justifyContent: 'center'}}>
    {currentIndex<3&&<div>
        {Questions[currentIndex].question}
        {Questions[currentIndex].answers.map((question, index) => {
            return <div style={{display:'flex'}}>
        <button onClick={() => {question.isRight? setCurrentIndex(currentIndex + 1)%3: alert('Joder')}}>X</button>
        <p className={question.isRight} key={index}>{question.txt}</p>
        </div>
})}
<img src={Questions[currentIndex].img} alt="" width={'300px'} />
        </div>}
        {currentIndex===3&&
        <PopUp visible={true} >
        <img src="https://media1.giphy.com/media/87NS05bya11mg/200.gif?cid=6c09b952dnnu1zliis727z5vpl09bpx5jyktloflk26akqyg&ep=v1_gifs_search&rid=200.gif&ct=g" alt="" width={'305px'}/>
        <button onClick={()=> setCurrentIndex(0)}>Go Back</button>
        </PopUp>}
    </div>
    )}
export default Trivia