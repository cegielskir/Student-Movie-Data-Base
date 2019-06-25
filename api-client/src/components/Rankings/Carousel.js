import React, {Component} from 'react';

import RatingProvider from '../../api/ratings';

import "./Carousel.css"

export default class Carousel extends Component {
    render() {
        return (
          <div>
            <h1 className="text-center section-title">RANKINGI</h1>

            <RatingProvider />
    
          </div>
        );
      }
}