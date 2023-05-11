import React, { Component } from 'react';
import axios from 'axios';
import Beer from './Beer';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      beers: []
    }
  }

  async componentDidMount() {
    const beerData = await axios.get('https://api.punkapi.com/v2/beers');
    this.setState({
      beers: beerData.data.map(beer => {
        return {
          ...beer,
          liked: false
        }
      })
    })
  }

  like = (idx) => {
    const beerCopy = [...this.state.beers];
    beerCopy[idx] = { ...beerCopy[idx], liked: true };
    this.setState({
      beers: beerCopy
    });
  }

  dislike = (idx) => {
    const beerCopy = [...this.state.beers];
    beerCopy[idx] = { ...beerCopy[idx], liked: false };
    this.setState({
      beers: beerCopy
    });
  }

  render() {
    return (
      <div className="App">
        <ol>
          {this.state.beers.map((beer, idx) => (
            <Beer key={idx} beer={beer} liked={() => this.like(idx)} disliked={() => this.dislike(idx)}/>
          ))}
        </ol>  
      </div>
    );
  }
}

export default App;