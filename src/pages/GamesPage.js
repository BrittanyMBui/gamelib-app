import React from 'react';
import GamesList from '../components/Games/GamesList';


class GamesPage extends React.Component {
    state = {
        games: [],
    };

    componentDidMount() {
        fetch('http://localhost:4000/api/v1/games')
        .then((response) => response.json())
        .then((jsonData) => {
            // console.log(jsonData);
            this.setState({
                games: jsonData,
            })
        })
        .catch()
    }

    handleDeleteGame = (gameId) => {
        // console.log(gameId);
        let confirmed = window.confirm('You sure?');
        if (confirmed) {
            console.log('Confirmed, fire away.');
    
            fetch(`http://localhost:4000/api/v1/games/${gameId}`, {
                method: 'DELETE',
            })
            .then((response) => {
                return response.json();
            })
            .then((jsonData) => {
                console.log(jsonData);
                const stateCopy = {
                    ...this.state
                };
                const updatedGames = stateCopy.games.filter((gameobj) => {
                    return gameobj._id !== gameId
                });

                this.setState({
                    games: updatedGames,
                })
            })
            .catch((err) => console.log(err))
        }
    }



    // getGames = () => {
    //     return this.state.games.map((gamesObj) => {
    //     return <div>{gamesObj.title}</div>
    //     });
    // };

    render() {

        return (
            <div>
                <h1>Games Page</h1>
                <GamesList 
                    games={this.state.games} 
                    deleteGame={this.handleDeleteGame}
                />
            </div>
        );
    }
}

export default GamesPage;