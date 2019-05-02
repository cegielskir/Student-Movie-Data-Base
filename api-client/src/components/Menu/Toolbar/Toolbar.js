import React, {Component} from 'react';
import { Link } from "react-router-dom";

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Searcher from '../Searcher/Searcher';
import Logger from '../Logging/Logging';

import './Toolbar.css';

import logo from './logo-mini-color.png'

export default class Toolbar extends Component {
    render() {
        return (
            <header className="toolbar">
                    <div className="container">
                <nav className="toolbar__navigation">
                    <div className="toolbar__toggle-button">
                        <DrawerToggleButton click={this.props.drawerClickHandler} />
                    </div>
                    <div className="toolbar__logo"><a href="/"><img alt="logo" src={logo}/></a></div>
                    <div className="spacer" />
                    <Searcher />
                    <div className="spacer" />
        
             
                    <div className="toolbar_navigation-items">
                        <ul>
                            <li>
                                <Link to="news">Aktualności</Link>
                            </li>
                            <li>
                                <Link to="movies">Filmy</Link>
                            </li>
                            <li>
                                <Link to="series">Seriale</Link>
                            </li>
                            <li>
                                <Link to="rankings">Rankingi</Link>
                            </li>
                        </ul>
                    </div>
                    <Logger />
                    
                </nav>
                </div>
            </header>
        )
    };
}

