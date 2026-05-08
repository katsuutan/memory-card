import { useState, useEffect } from 'react';
import Card from './components/Card';
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

  return (
    <div className='app'>
      <h1>Uma Musume Memory Card</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
        {characters.map((character) => (
          <Card key={character.id} character={character} onClick={(id) => console.log(id)} />
        ))}
      </div>
    </div>
  );
}

export default App;