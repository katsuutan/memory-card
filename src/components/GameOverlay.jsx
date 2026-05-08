import '../styles/GameOverlay.css';

function GameOverlay({ gameStatus, currentScore, bestScore, onReset }) {
  const isWon = gameStatus === 'won';

  return (
    <div className={`overlay ${isWon ? 'overlay-win' : 'overlay-lose'}`}>
      <div className="overlay-content">
        <h2>{isWon ? '🏆 You Win!' : '💔 Game Over!'}</h2>
        <p>{isWon ? 'You clicked all 12 characters correctly!' : 'You clicked the same card twice!'}</p>
        <p>Score: {currentScore} | Best: {bestScore}</p>
        <button onClick={onReset}>Play Again</button>
      </div>
    </div>
  );
}

export default GameOverlay;