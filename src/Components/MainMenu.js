import React, {useContext} from 'react'
import { QuizContext } from '../Helper/Context';
import '../App.css'

function Mainmenu() {
const {gameState, setGameState }=useContext(QuizContext)

  return (
    <div className='Menu'>

      <button onClick={() => {setGameState('quiz')}}>Start Quiz</button>
    </div>
  )
}

export default Mainmenu;
