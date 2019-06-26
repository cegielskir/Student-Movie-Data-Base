import React, {Component} from 'react';

import { ACCESS_TOKEN, API_BASE_URL } from '../../api/constants';

import './Item.css';

class ItemDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            a: ['', '', '', '', '', '', '', '', '', ''],
            rating: 0
        }

        this.changeStars = this.changeStars.bind(this);
        this.sendRating = this.sendRating.bind(this);
    }

    sendRating() {
        const request = { 
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + ACCESS_TOKEN,
            }),
            body: {
                value: this.state.rating,
                title: this.props.details.Title,
            }
        }

        //console.log(request)
        fetch(API_BASE_URL + '/ratings', request)  
        .then(function(res) {
          return res.json();
         })
        .then(function(resJson) {
              return resJson;
         })
    }

    changeStars = index => {
        let new_a = [];
        for(let i=0; i<10; i++) {
            i <= index ? new_a[i] = 'x' : new_a[i] = '';
        }

        this.setState({
            a: new_a,
            rating: index+1
        })
    }

    renderStars() {
        return this.state.a.map( (item, index) => (
            <button className="stars__button" key={index} onClick={() => this.changeStars(index)}>
                {this.state.a[index] === '' ? <i key={index + ' ' + index} className="fa fa-star i__star"></i> : <i key={index + ' ' + index} className="fa fa-star i__star mark"></i>}
            </button>
        ))
    }

    render() {
        let details = this.props.details;
  
        return (
            <div className="movieDetails">
                <div className="row">
                    <div className="col-md-9"> 
                        <h3>{details.Title} <span className="movie-year">({details.Year})</span></h3>
                        <p>{details.Runtime}</p>
                        <p>{details.Plot}</p>
                        <h5>Szczegóły</h5>
                        <div className="all row">
                        <div className="col-md-2">
                            <p>Reżyseria:</p>
                            <p>Scenariusz:</p>
                            <p>Gatunek:</p>
                            <p>Produkcja:</p>
                            <p>Premiera:</p>
                            <p>BoxOffice</p>
                        </div>
                        <div className="col-md-10">
                            <p>{details.Director}</p>
                            <p>{details.Writer}</p>
                            <p>{details.Genre}</p>
                            <p>{details.Country}</p>
                            <p>{details.Released}</p>
                            <p>{details.BoxOffice}</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="movie-rating">
                        <p>Ocena według IMDb:</p>
                        <p className="movie-stars"><i className="fa fa-star"></i> {details.imdbRating}/10</p>
                        <span>({details.imdbVotes} ocen)</span>
 
                        </div>
                        { localStorage.getItem('accessToken')
                         ? <div> 
                             <p className="p__rating">Oceń film w skali 1-10</p>
                             {this.renderStars()}
                         <button onClick={this.sendRating} type="button" className="btn btn-outline-secondary btn-rounded waves-effect rating-button">Oceń film</button>
                            </div>
                         : <p>Zaloguj się aby móc oceniac filmy</p>
                        }
                    </div>
                </div>
            </div>
        
            );
          
    }
}
export default ItemDetails;