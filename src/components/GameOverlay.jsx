import '../styles/GameOverlay.css';

function GameOverlay({ gameStatus, currentScore, bestScore, onReset }) {
  const isWon = gameStatus === 'won';

  return (
    <div className={`overlay ${isWon ? 'overlay-win' : 'overlay-lose'}`}>
      <div className="overlay-content">
        <h2>{isWon ? '🏆 Perfect Race!' : '🐎 False Start!'}</h2>
        <p>{isWon ? 'You remembered every horse girl without a single misstep. A true Uma Stan!' : 'You clicked the same horse girl twice. Even the best racers stumble — line up and try again!'}</p>
        <p>Score: {currentScore} | Best: {bestScore}</p>
        <button onClick={onReset}>Play Again</button>
      </div>
    </div>
  );
}

export default GameOverlay;