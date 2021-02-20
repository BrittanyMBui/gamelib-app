const GamesCard = (props) => {
    return (
        <>
            <div>{props.game.title}</div>
            <br />
            <button 
                onClick={() => props.deleteGame(props.game._id)}
            >delete
            </button>
            <button>update</button>
            <hr />
            <br />
        </>
    ) 
};

export default GamesCard;