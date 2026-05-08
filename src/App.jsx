import { useState, useEffect } from 'react';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import Card from './components/Card';
import GameOverlay from './components/GameOverlay';
import './index.css';

const CHARACTER_IDS = [4536, 5485, 4879, 5360, 5191, 7426, 7520, 5100, 5179, 5574, 4891, 4915];

function App() {
  const [characters, setCharacters] = useState([]);
  const [clickedIds, setClickedIds] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameStatus, setGameStatus] = useState('playing');
  const [isShuffling, setIsShuffling] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      const results = await Promise.all(
        CHARACTER_IDS.map((id) =>
          fetch(`https://umapyoi.net/api/v1/character/${id}`)
            .then((res) => res.json())
        )
      );
      setCharacters(results);
    };

    fetchCharacters();
  }, []);

  const handleCardClick = (id) => {
    if (clickedIds.includes(id)) {
      setGameStatus('lost');
    } else {
      // Adds id into the array of clickedIds
      setClickedIds([...clickedIds, id]);

      // Update Current Scores
      setCurrentScore(currentScore + 1);

      // Checks if score hit 12 (max points) to trigger the won state.
      if (currentScore + 1 === 12) { 
        setGameStatus('won');
      }

      // Updates best score if current score + 1 exceeds it.
      if (currentScore + 1 > bestScore) {
        setBestScore(bestScore + 1);
      }
      
      // Shuffles
      setIsShuffling(true);
      setCharacters((prev) => [...prev].sort(() => Math.random() - 0.5));
      setTimeout(() => setIsShuffling(false), 500);
    }
  };

  const handleReset = () => {
    setClickedIds([]);
    setCurrentScore(0);
    setGameStatus('playing');
    setCharacters((prev) => [...prev].sort(() => Math.random() - 0.5));
  };

  return (
    <div className='app'>
      <Header currentScore={currentScore} bestScore={bestScore} />
      <GameBoard
        characters={characters}
        onCardClick={handleCardClick}
        isShuffling={isShuffling}
      />
      {gameStatus !== 'playing' && (
        <GameOverlay
          gameStatus={gameStatus}
          currentScore={currentScore}
          bestScore={bestScore}
          onReset={handleReset}
        />
      )}
    </div>
  );
}

export default App;