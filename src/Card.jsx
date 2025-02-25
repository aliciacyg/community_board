import './Card.css';

function Card(props) {
  return (
    <div className="card">
      <div className="card-content">
        <a href={props.url}>
          <img src={props.imageUrl} className="card-image" />
          <h2 className="card-title">{props.title}</h2>
          <h3 className="card-description">{props.description}</h3> 
        </a>
      </div>
    </div>
  );
}

export default Card;