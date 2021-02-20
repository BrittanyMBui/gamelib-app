import GamesCard from './GamesCard';

const GamesList = (props) => {
    return props.games.map((gamesObj) => {
        // return <div>{gamesObj.title}</div>
        return <GamesCard key={gamesObj._id} game={gamesObj} deleteGame={props.deleteGame} />
    });
};

export default GamesList;