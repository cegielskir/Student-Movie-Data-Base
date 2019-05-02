import React from 'react';

import './Searcher.css'

const searcher = props => (
    <div className="searcher__controler">
        <input type="text" placeholder="Szukaj" id="searcher__input"/>
        <span className="searcher__button">
            <i className="fa fa-search" aria-hidden="true"></i>
        </span>
    </div>
);

export default searcher;
