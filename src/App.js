import React, { useState, useContext } from 'react';
import './App.css';
import MainMenu from '../src/Components/MainMenu';
import Quiz from '../src/Components/Quiz';
import EndScreen from '../src/Components/EndScreen';

import { QuizContext } from './Helper/Context';

function App() {
  const [gameState, setGameState] = useState('menu');
  const [score, setScore ] =useState(0)

  return (
    <div className='App'>
      <h1>Quiz App</h1>

      <QuizContext.Provider value={ { gameState, setGameState, score, setScore}}>
        {gameState === 'menu' && <MainMenu />}
        {gameState === 'quiz' && <Quiz />}
        {gameState === 'endScreen' && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
