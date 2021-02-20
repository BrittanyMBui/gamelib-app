import React from 'react';

class EditGame extends React.Component {
    state = {
        title: '',
        publisher: '',
        coverArtUrl: '',
        completed: false,
    }

    componentDidMount() {
        fetch(`http://localhost:4000/api/v1/games/${this.props.match.params.id}`)
        .then((response) => {
            return response.json();
        })
        .then((jsonData) => {
            this.setState(jsonData)
        })
        .catch((err) => {
            console.log(err)
        });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:4000/api/v1/games/${this.props.match.params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        })
        .then(() => this.props.history.push('/games'))
        .catch((err) => console.log(err));
    };


    render () {
        return (
            <div>
                <h1>Edit {this.state.title}</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <br />
                        <input 
                            type="text" 
                            id="title" 
                            name="title" 
                            value={this.state.title}
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div>
                        <label htmlFor="publisher">Publisher:</label>
                        <br />
                        <input 
                            type="text" 
                            id="publisher" 
                            name="publisher" 
                            value={this.state.publisher}
                            onChange={this.handleChange}  
                        />
                    </div>
                    <div>
                        <label htmlFor="coverArtUrl">Cover Art:</label>
                        <br />
                        <input 
                            type="text" 
                            id="coverArtUrl" 
                            name="coverArtUrl" 
                            value={this.state.coverArtUrl}
                            onChange={this.handleChange}  
                        />
                    </div>
                    <button type="submit">Update Game</button>
                </form>
            </div>
        );
    }
}

export default EditGame;