import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs, addSmurf } from '../actions';
import Smurfs from '../components/Smurfs';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newSmurf: {
        name: '',
        age: '',
        height: ''
      }
    }
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleChange = event => {
    this.setState({
      newSmurf: {
        ...this.state.newSmurf,
        [event.target.name]: event.target.value
      }
    });
  };

  addSmurfy = event => {
    event.preventDefault();
    this.props.addSmurf(this.state.newSmurf);
    this.setState({
      newSmurf: {
        name: '',
        age: null,
        height: ''
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <form>
          <input
            name='name'
            type='text'
            placeholder='name'
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            name='age'
            type='text'
            placeholder='age'
            value={this.state.age}
            onChange={this.handleChange}
          />
          <input
            name='height'
            type='text'
            placeholder='height'
            value={this.state.height}
            onChange={this.handleChange}
          />
          <button onClick={this.addSmurfy}>Add</button>
        </form>
        <Smurfs smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetching
  }
}

export default connect(mapStateToProps, { getSmurfs, addSmurf })(App);
