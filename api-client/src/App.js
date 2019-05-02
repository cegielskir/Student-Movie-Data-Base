import React, {Component} from 'react';

import Menu from './components/Menu/Menu'
import Slider from './components/Slider/Slider'
import Footer from  './components/Footer/Footer'
import Tabs from './components/Movies/Tabs/Tabs'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Menu />
        <Slider />
        <main>
          <section id="movies">
            <div className="container">
              <Tabs />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
