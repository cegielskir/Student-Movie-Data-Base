import React, {Component} from 'react';

import './App.css';

import Menu from './components/Menu/Menu'

class App extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Menu />
      </div>
    );
  }
}

export default App;
