import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import { API_BASE_URL, GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL } from '../api/constants';

export default class Logging extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            userName: 'user',
            accessToken: null,
            success: false
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.loginUser = this.loginUser.bind(this);
        this.logoutUser = this.logoutUser.bind(this);
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    loginUser() {
        fetch(API_BASE_URL+'/auth/signin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "usernameOrEmail": this.state.email,
                "password": this.state.password            
            })
            }
        )
        .then(response => {
            //console.log(response)
            if(response.ok){
                return response;
            } 
            throw Error("Fetch error")
        })
        .then(response => response.json())
        .then(response => {
            localStorage.setItem('accessToken', response.accessToken);
            this.props.history.push(`/`);
        })
        .catch(err => {
            console.log(err);
        });
        
    }

    logoutUser() {
        localStorage.removeItem('accessToken');
        setTimeout(() => {
            this.props.history.push(`/`);
        }, 0);
    }

    request = (options) => {
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
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
          <div>
            <main>
                <section id="account-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                { 
                                localStorage.getItem('accessToken')
                                ?
                                <div>
                                <h3>Witaj, {this.state.userName}</h3>
                                <br/>
                                <p>Wyloguj się, aby przełączyć się na inne konto</p>
                                <button type="button" onClick={this.logoutUser} className="btn btn-outline-secondary btn-rounded waves-effect account__button">Wyloguj się</button>
                                </div>
                                :
                                <div>
                                <h3>Zaloguj się</h3>
                                <form>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" onChange={this.handleEmailChange} className="form-control" id="email" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <label>Hasło</label>
                                        <input type="password" onChange={this.handlePasswordChange} className="form-control" id="password" placeholder="Hasło" />
                                    </div>
                                    <button type="button" onClick={this.loginUser} className="btn btn-outline-secondary btn-rounded waves-effect account__button">Zaloguj się</button>
                                </form>
                                <br/>
                                <p>Nie masz jeszcze konta? <Link to="/signup">Zarejestruj się za darmo!</Link></p>
                                </div>
                                }
                            </div>
                            <div className="col-md-2">
                                <div className="col-wrapper">
                                    <div className="separator"></div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <h3>Połącz z istniejącym kontem</h3>
                                <a href={FACEBOOK_AUTH_URL}>
                                <button className="btn btn-outline-secondary btn-rounded waves-effect fb external-login">
                                    Zaloguj się kontem Facebook
                                </button>
                                </a>
                                <a href={GOOGLE_AUTH_URL}>
                                <button className="btn btn-outline-secondary btn-rounded waves-effect google external-login">
                                    Zaloguj się kontem Google
                                </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {this.props.children}
          </div>
        );
      }
}