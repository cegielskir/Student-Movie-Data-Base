import React from 'react';

import './Footer.css'

const footer = props => (
    <footer>
        <div className="footer-links">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h5>Footer title 1</h5>
                    </div>
                    <div className="col-md-3">
                        <h5>Footer title 2</h5>
                    </div>
                    <div className="col-md-3">
                        <h5>Footer title 3</h5>
                    </div>
                    <div className="col-md-3">
                    <h5>Footer title 4</h5>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer">
            <div className="container">
                <p>&copy; Copyright SMDb - Paweł Gędłek & Rafał Cegielski</p>
            </div>
        </div>
    </footer>
);

export default footer;