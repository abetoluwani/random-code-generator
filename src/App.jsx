import React from "react";
import './App.css';
import axios from 'axios';

class App extends React.Component {
    state = {
        advice : ''
    }
    // lifecycle method
    componentDidMount() {
        this.fetchAdvice();
    }
    render() {
        return (
            <div>
                <p>Random Quote Generator</p>
            </div>
        )
    }
}

export default App