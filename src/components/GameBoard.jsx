import Card from './Card';
import '../styles/GameBoard.css';

function GameBoard({ characters, onCardClick, isShuffling, isWrong }) {
  return (
    <div className={`game-board ${isShuffling ? 'shuffling' : ''} ${isWrong ? 'wrong' : ''}`}>
      {characters.map((character) => (
        <Card
          key={character.id}
          character={character}
          onClick={onCardClick}
        />
      ))}
    </div>
  );
}

export default GameBoard;