import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

import { API_BASE_URL } from '../api/constants';

export default class Logging extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            accessToken: null,
            success: false
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.loginUser = this.loginUser.bind(this);

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
            this.setState({
                accessToken: response.accessToken
            })
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        //console.log(this.props)
        if(this.state.accessToken) {
            setTimeout(() => {
                this.props.history.push(`/`);
            }, 3000);
        } 
        return (
          <div>
            <main>
                <section id="account-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
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
                            </div>
                            <div className="col-md-2">
                                <div className="col-wrapper">
                                    <div className="separator"></div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <h3>Połącz z istniejącym kontem</h3>
                                <button className="btn btn-outline-secondary btn-rounded waves-effect fb external-login">
                                    Zaloguj się kontem Facebook
                                </button>
                                <button className="btn btn-outline-secondary btn-rounded waves-effect google external-login">
                                    Zaloguj się kontem Google
                                </button>
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