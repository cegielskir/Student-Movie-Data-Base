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

class MovieProvider extends Component {
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
  
  renderMovies(type) {
  let resultList = this.state.movieList;

  switch(type) {
    case 'popular': resultList = resultList.slice(0, 6); break;
    case 'coming-soon': resultList = resultList.filter(item => { return new Date(item.premiereDate).getTime() > Date.now() }); break;
    case 'most-reviewed': resultList = resultList.slice(0, 3); break;
    case 'best-rated': resultList = resultList.reverse().slice(0, 3); break;
    default: break;
  }

  return resultList.slice(0, 6).map( (item, index) => (
        <div key={ index } className="col-md-2">
        <img alt={index} src={item.posterUrl} />
        <p  
        key={ index }>
            <Link to={{
  pathname: `movie/${item.title}`,
  state: {
    movieID: item.id
  } }}>{item.title}</Link>
        </p>
        </div>
        )
    );
  }


    render() {
      return (

        <div className="row">
            {this.renderMovies(this.props.type)}
        </div>
      );
    }
  }
  
  
  export default MovieProvider;
