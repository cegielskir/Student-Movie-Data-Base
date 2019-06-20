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
import User from './components/User'

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
      authenticated: false,
      userToken: null,
    };
  }

  componentWillReceiveProps(props) {
    console.log('propsy Pawle', this.props)
  }
  shouldComponentUpdate(props) {
    console.log('should')
  }
  componentDidMount(props) {
    console.log('mount')
    if(localStorage.getItem('accessToken')){
      this.setState({
        authenticated: true
      })
    }
  }
  static getDerivedStateFromProps(nextProps, prevState){
    console.log('czas na propsy')
  }

  render() {
    console.log('render', this.props)
    return (
      <div>

        <Router>

            <Menu authenticated={this.state.authenticated}/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/news" component={News} />
              <Route path="/movies" component={Movies} />
              <Route path="/series" component={Series} />
              <Route path="/rankings" component={Rankings} />

              <Route path="/login" component={Logging} />
              <Route path="/signup" component={Registration} />
              <Route path="/user" component={User} />

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
