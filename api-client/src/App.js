import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Menu from './components/Menu/Menu'
import Home from './components/Home'
import Footer from  './components/Footer/Footer'

/*--- pages ---*/
import News from './components/News'
import Movies from './components/Movies'
import Series from './components/Series'
import Rankings from './components/Rankings'
import Item from './components/Item'

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
        <Router>
          <Menu />

            <Route exact path="/" component={Home} />
            <Route exact path="/news" component={News} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/series" component={Series} />
            <Route exact path="/rankings" component={Rankings} />

            <Route path="/movie/:id" component={Item} />
        </Router>

        <Footer />
      </div>
    );
  }
}

export default App;
