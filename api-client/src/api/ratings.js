import React, { Component } from 'react';

import { ACCESS_TOKEN, API_BASE_URL } from './constants'

const request = { 
    method: 'GET',
    headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + ACCESS_TOKEN,
    })
}

class RatingProvider extends Component {
    constructor(props) {
      super(props);
      this.state = {
        ratingsList: [],
        moviesPosters: [],
        isLoaded1: false,
        isLoaded2: false
      }

      this.loadRatings = this.loadRatings.bind(this);
      this.loadPosters = this.loadPosters.bind(this);
    }
  
  componentDidMount() {
    this.loadRatings();
    this.loadPosters();
  }

  loadRatings() {
    fetch(API_BASE_URL + '/ratings', request)  
  .then(function(res) {
    return res.json();
   })
  .then(function(resJson) {
        return resJson;
   }).then(json => {
       this.setState({
           ratingsList: json,
           isLoaded1: true
       })
   })
  }

  loadPosters(_id) {
    fetch(API_BASE_URL + '/movies', request)  
      .then(function(res) {
        return res.json();
       })
      .then(function(resJson) {
            return resJson;
       }).then(json => {
            this.setState({
                moviesPosters: json,
                isLoaded2: true
            })
        })
    }
  
  
  renderRatings() {
    let posters = this.state.moviesPosters.reverse();
    return this.state.ratingsList.reverse().slice(0, 6).map( (item, index) => (
        <div key={ index } className="col-md-2 div-mock">
                <img className="rating__img" alt={index} src={posters[index].posterUrl } />
                <div className="mock-caption">
                    <i className="fa fa-star"></i> { item.value }
                </div>
        </div>
        )
    );
  }


    render() {

      return (

        <div className="row">
            {this.state.isLoaded1 && this.state.isLoaded2 ? this.renderRatings() : <div></div>}
        </div>
      );
    }
  }
  
  
  export default RatingProvider;
