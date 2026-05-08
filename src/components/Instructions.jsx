import '../styles/Instructions.css';

function Instructions({ onClose }) {
  return (
    <div className="instructions-overlay" onClick={onClose}>
      <div className="instructions-content" onClick={(e) => e.stopPropagation()}>
        <h2>How to Play</h2>
        <ul>
          <li>Click on a character card to score a point</li>
          <li>Don't click the same character twice!</li>
          <li>Click all 12 characters without repeating to win</li>
          <li>Cards shuffle after every click — Good luck if you have bad short term working memory!</li>
        </ul>
        <button onClick={onClose}>Got it!</button>
      </div>
    </div>
  );
}

export default Instructions;