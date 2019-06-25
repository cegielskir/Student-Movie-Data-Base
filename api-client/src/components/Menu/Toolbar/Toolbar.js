import React, {Component} from 'react';
import { Link } from "react-router-dom";

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Searcher from '../Searcher/Searcher';
import Logger from '../Logging/Logging';

import './Toolbar.css';

import logo from './logo-mini-color.png';
import user from './user.png';

const ACCESS_TOKEN = localStorage.getItem('accessToken');

export default class Toolbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: 'user'
        }
    }
    request = (options) => {
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + ACCESS_TOKEN,
        })
    
        const defaults = {headers: headers};
        options = Object.assign({}, defaults, options);
    
        return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if(!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
    };
    
    getCurrentUser() {
        if(!ACCESS_TOKEN) {
            return Promise.reject("No access token set.");
        }

        return this.request({
            url: "http://localhost:5000/user/me",
            method: 'GET'
        })
        .then(response => {
            this.setState({
                userName: response.username
            })
        }).catch(error => {
            console.log(error);
        });
    }

    componentDidMount() {
        this.getCurrentUser();
    }

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
                    { this.props.authenticated ? <div className="toolbar__username"><img className="toolbar__userimg" alt="user" src={user}/> {this.state.userName}</div> : <Logger />}
                    
                </nav>
                </div>
            </header>
        )
    };
}

