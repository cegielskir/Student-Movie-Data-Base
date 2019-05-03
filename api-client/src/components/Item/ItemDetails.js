import React, {Component} from 'react';

import './Item.css';

class ItemDetails extends Component {
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
                        <div className="row">
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
                        <button type="button" className="btn btn-outline-secondary btn-rounded waves-effect rating-button">Oceń film</button>
                    </div>
                </div>

  
                
            </div>
        
            );
          
    }
}
export default ItemDetails;