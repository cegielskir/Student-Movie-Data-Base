import React, {Component} from 'react';

import "./Carousel.css"

export default class Carousel extends Component {
    render() {
        return (
          <div>
            <h1 className="text-center section-title">RANKINGI</h1>
            <div className="row">
                <div className="col-md-2 div-mock"><div className="img-mock"><div className="mock-caption"><i className="fa fa-star"></i> 8.7</div></div></div>
                <div className="col-md-2 div-mock"><div className="img-mock"><div className="mock-caption"><i className="fa fa-star"></i> 6.8</div></div></div>
                <div className="col-md-2 div-mock"><div className="img-mock"><div className="mock-caption"><i className="fa fa-star"></i> 9.1</div></div></div>
                <div className="col-md-2 div-mock"><div className="img-mock"><div className="mock-caption"><i className="fa fa-star"></i> 8.2</div></div></div>
                <div className="col-md-2 div-mock"><div className="img-mock"><div className="mock-caption"><i className="fa fa-star"></i> 8.6</div></div></div>
                <div className="col-md-2 div-mock"><div className="img-mock"><div className="mock-caption"><i className="fa fa-star"></i> 6.5</div></div></div>
            </div>
          </div>
        );
      }
}