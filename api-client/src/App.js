import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import OAuth2RedirectHandler from './oauth2/OAuth2RedirectHandler';

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
import Review from './components/Review'

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

  componentDidMount(props) {
    if(localStorage.getItem('accessToken')){
      this.setState({
        authenticated: true
      })
    }
    
  }

  render() {
    return (
      <div>

        <Router forceRefresh={true}>

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
              <Route path="/review/:id" component={Review} />

              <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route> 
              <Route component={NotFound} />
            </Switch>

            <Footer />
        </Router>


      </div>
    );
  }
}

export default App;
