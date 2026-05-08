import '../styles/Card.css';

function Card({ character, onClick }) {
  return (
    <div className="card" onClick={() => onClick(character.id)}>
      <img src={character.thumb_img} alt={character.name_en} />
      <p>{character.name_en}</p>
    </div>
  );
}

export default Card;