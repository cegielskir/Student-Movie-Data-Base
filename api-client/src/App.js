import React, {Component} from 'react';

import Menu from './components/Menu/Menu'
import Slider from './components/Slider/Slider'
import Footer from  './components/Footer/Footer'

import './App.css';


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
        <Slider />
        <main>

        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
