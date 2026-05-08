import '../styles/Header.css';

function Header({ currentScore, bestScore, onShowInstructions }) {
  return (
    <header className="header">
      <div className="header-title">
        <h1>Uma Musume: Memory Card Game</h1>
      </div>

      <div className="scoreboard">
        <div className="score">
          <p>Current Score: <span>{currentScore}</span></p>
        </div>
        <div className="score">
          <p>Best Score: <span>{bestScore}</span></p>
        </div>
      </div>
      <button className="instructions-btn" onClick={onShowInstructions}>?</button>
    </header>
  );
}

export default Header;