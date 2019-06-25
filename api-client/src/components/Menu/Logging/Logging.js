import React from 'react';
import {Link} from 'react-router-dom';

import './Logging.css'

const logging = props => (
    <div className="">
     <Link to="/login">
        <button type="button" className="btn btn-outline-secondary btn-rounded waves-effect logging__button">
           Zaloguj się
        </button>
        </Link>
    </div>
);

export default logging;