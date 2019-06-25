import React from 'react';
import { Link } from  'react-router-dom';

import './Footer.css'

import logo  from '../Menu/Toolbar/logo-mini-color.png';

const footer = props => (
    <footer>
        <div className="footer-links">
            <div className="container">
                <div className="row">

                    <div className="col-md-3">
                        <h5>Student Movie DataBase</h5>
                        <p className="text-justify px-10">Ogromna baza filmowa tworzona przez studentów, ale za to nie tylko dla studentów!</p>
                    </div>
                    <div className="col-md-3">
                        <div className="footer__wraper">
                        <img alt="logo__footer" src={logo} />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h5>Szybkie Menu</h5>
                        <ul className="footer__links">
                            <li><Link to="/news">Aktualności</Link></li>
                            <li><Link to="/movies">Filmy</Link></li>
                            <li><Link to="/series">Seriale</Link>  </li>
                            <li><Link to="/rankings">Rankingi</Link></li>
                        </ul>

                                             
                    </div>
                    <div className="col-md-3">
                        <h5>Kontakt</h5>
                        <p className="text-justify">
                        <i className="fa fa-envelope footer__icon"></i> kontakt@smdb.pl
                        </p>
                        <p> <i className="fa fa-map-marker footer__icon"></i>
                        Al. Mickiewicza 30 <br/> 30-059 Kraków
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer">
            <div className="container">
                <p>Copyright &copy; 2019 SMDb - Paweł Gędłek & Rafał Cegielski</p>
            </div>
        </div>
    </footer>
);

export default footer;