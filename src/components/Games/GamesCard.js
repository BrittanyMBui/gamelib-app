import { Link } from 'react-router-dom';

const GamesCard = (props) => {
    return (
        <>
            <div>{props.game.title}</div>
            <br />
            <button 
                onClick={() => props.deleteGame(props.game._id)}
            >delete
            </button>
            <Link to={`/edit-game/${props.game._id}`}><button>Edit</button></Link>
            <hr />
            <br />
        </>
    ) 
};

export default GamesCard;