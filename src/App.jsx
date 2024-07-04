import React from "react";
import './App.css';
import axios from 'axios';

class App extends React.Component {
    state = {
        advice: ''
    };
    // lifecycle method
    componentDidMount() {
        this.fetchadvice();
    }

    fetchadvice = () => {
        axios
            .get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip;
                this.setState({ advice });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        return (
            <div className="app">
                <div className="card">
                     <h1 className="heading">{this.state.advice}</h1>
                    <button className="button" onClick={this.fetchadvice}>
                        <span>Generate Advice</span>
                    </button>
                </div>

            </div>
        );
    }
}

export default App;