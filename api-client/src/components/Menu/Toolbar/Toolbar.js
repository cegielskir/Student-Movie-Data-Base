import React, {Component} from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Searcher from '../Searcher/Searcher';
import Logger from '../Logging/Logging';

import './Toolbar.css';

const logo = require('images/logo-mini-color.png');

export default class Toolbar extends Component {
    render() {
        return (
            <header className="toolbar">
                    <div className="container">
                <nav className="toolbar__navigation">
                    <div className="toolbar__toggle-button">
                        <DrawerToggleButton click={this.props.drawerClickHandler} />
                    </div>
                    <div className="toolbar__logo"><a href="/"><img src={logo}/></a></div>
                    <div className="spacer" />
                    <Searcher />
                    <div className="spacer" />
        
             
                    <div className="toolbar_navigation-items">
                        <ul>
                            <li><a href="#">Aktualności</a></li>
                            <li><a href="#">Filmy</a></li>
                            <li><a href="#">Seriale</a></li>
                            <li><a href="#">Rankingi</a></li>
                        </ul>
                    </div>
                    <Logger />
                    
                </nav>
                </div>
            </header>
        )
    };
}

