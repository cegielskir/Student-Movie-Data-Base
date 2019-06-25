import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import { ACCESS_TOKEN, API_BASE_URL } from '../api/constants'

const request = { 
  method: 'GET',
  headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + ACCESS_TOKEN,
  })
}

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoaded: false,
    }

    this.loadMovies = this.loadMovies.bind(this);
  }

componentDidMount() {
  this.loadMovies();
}

loadMovies() {
  fetch(API_BASE_URL + '/movies', request)  
    .then(function(res) {
      return res.json();
     })
    .then(function(resJson) {
          return resJson;
     }).then(json => {
          this.setState({
              movies: json,
              isLoaded: true
          })
      })
  }


renderMovies() {

  return this.state.movies.slice(0, 12).map( (item, index) => (
      <div key={ index } className="col-md-3">
          <div className="movie__box">
          <img className="movie__box__img" alt={index} src={this.state.movies[index].posterUrl } />
          <Link to={`movie/${item.title}`}>{item.title}</Link>
          </div>

      </div>
      )
  );
}


    render() {
        return (
          <div>
            <main style={{margin: '100px 0', textAlign: 'center'}}>
              <div className="container">
              <h1 className="header__title">Filmy</h1>
                <div className="row">                 { this.state.isLoaded ? this.renderMovies() : <div></div> }</div>
              </div>


            </main>
          </div>
        );
      }
}