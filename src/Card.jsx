import './Card.css';

function Card({props}) {
  return (
    <div className="card">
      <img src={props.imageUrl} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{props.title}</h3>
        <h2 className="card-description">{props.description}</h2>
      </div>
    </div>
  );
}

export default Card;