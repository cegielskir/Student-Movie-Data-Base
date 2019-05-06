import React, { Component } from 'react';
import { Link} from "react-router-dom";

import { ACCESS_TOKEN, API_BASE_URL } from './constants'

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + ACCESS_TOKEN,
    })

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response =>
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};

function getCurrentUser() {
    if(!ACCESS_TOKEN) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/movies",
        method: 'GET'
    });
}

class Client extends Component {
    constructor(props) {
      super(props);
      this.state = {
        movieList: [],
        isAuthenticated: false,
        isLoading: false
      }

      this.loadCurrentUser = this.loadCurrentUser.bind(this);
    }
  
  componentDidMount() {
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    this.setState({
      isLoading: true
    });
    getCurrentUser()
    .then(response => {
      this.setState({
        movieList: response,
        isAuthenticated: true,
        isLoading: false
      });
    }).catch(error => {
      this.setState({
        isLoading: false
      });
    });
  }
  
  renderMovies() {
  return this.state.movieList.map( (item, index) => (
        <div key={ index } className="col-md-2">
        <p  
        key={ index }>
            <Link to={`movie/${item.title}`}>{item.title}</Link>
        </p>
        </div>
        )
    );
  }


    render() {
      return (

        <div className="row">
            {this.renderMovies()}
        </div>
      );
    }
  }
  
  
  export default Client;
