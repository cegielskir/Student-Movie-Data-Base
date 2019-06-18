import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Menu from './components/Menu/Menu'
import Home from './components/Home'
import Footer from  './components/Footer/Footer'

/*--- pages ---*/
import News from './components/News'
import Movies from './components/Movies'
import Series from './components/Series'
import Rankings from './components/Rankings'

/*-- registration and logging page --*/
import Logging from './components/Logging'
import Registration from './components/Registration'

/*-- each item page --*/
import Item from './components/Item'

/*-- not found page --*/
import NotFound from './components/NotFound'

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
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/news" component={News} />
              <Route path="/movies" component={Movies} />
              <Route path="/series" component={Series} />
              <Route path="/rankings" component={Rankings} />

              <Route path="/login" component={Logging} />
              <Route path="/signup" component={Registration} />

              <Route path="/movie/:id" component={Item} />
              <Route component={NotFound} />
            </Switch>
        </Router>

        <Footer />
      </div>
    );
  }
}

export default App;
