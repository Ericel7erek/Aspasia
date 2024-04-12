import { CajaRoja } from '../app/style';
import workouts from '../assets/assets/data/workouts'
import { useState } from 'react';

const Training = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentWorkout, setCurrentWorkout] = useState(0);
    console.log(workouts[currentIndex].exercises);
    return (
      <div>
        <button onClick={()=>setCurrentIndex((currentIndex+1)%3)}>{workouts[currentIndex].title} </button>
        <div style={{display: 'flex'}}>
        <img src={workouts[currentIndex].exercises[currentWorkout].img} alt="" width={'400px'} />
        
      <div style={{display: 'flex', flexWrap: 'wrap', width: '800px'}}>
      {workouts[currentIndex].exercises.map((exercise, index) => {
          return <CajaRoja border={currentWorkout===index} style={{cursor: 'pointer'}} key={index} onClick={()=>setCurrentWorkout(index)} src={exercise.img} alt="" width={'300px'}/>
        })}
    </div>
    
    </div>
    </div>
  )
}

export default Training