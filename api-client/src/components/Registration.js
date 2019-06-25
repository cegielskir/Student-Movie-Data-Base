import React, {Component} from 'react';

import { API_BASE_URL, GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL } from '../api/constants';

export default class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            username: '',
            email: '',
            password: '',
            registrationSuccess: null, 
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.registerUser = this.registerUser.bind(this);

    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleUserNameChange(event) {
        this.setState({username: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleRedirect(url) {
        console.log('lets redirect')
        window.location.assign(url);
      }

    registerUser() {
        fetch(API_BASE_URL+'/auth/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": this.state.email,
                "username": this.state.username,
                "name": this.state.name,
                "password": this.state.password            
            })
            }
        )
        .then(response => {
            console.log(response)
            if(response.ok){
                this.setState({
                    registrationSuccess: true,
                });
                this.props.history.push("/login");
            } 
            else throw Error("Fetch error")
        })
        .catch(err => {
            console.log(err);
            this.setState(prevState => ({
                registrationSuccess: false,
            }))
        });
    }

    render() {
        console.log(this.state)

        return (
          <div>
            <main>
                <section id="account-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <h3>Załóż konto</h3>
                                <form>
                                    <div className="form-group">
                                        <label>Imię i nazwisko</label>
                                        <input type="text" onChange={this.handleNameChange} className="form-control" id="name" placeholder="Imię i nazwisko" />
                                    </div>
                                    <div className="form-group">
                                        <label>Nickname</label>
                                        <input type="text" onChange={this.handleUserNameChange} className="form-control" id="username" placeholder="Nickname" />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" onChange={this.handleEmailChange} className="form-control" id="email" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <label>Hasło</label>
                                        <input type="password" onChange={this.handlePasswordChange} className="form-control" id="password" placeholder="Hasło" />
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
                                        <label className="form-check-label" >Akceptuję regulamin serwisu SMDb wraz z jego Politykę Prywatności oraz zasadami pokrewnymi.</label>
                                    </div>
                                    <button type="button" onClick={this.registerUser} className="btn btn-outline-secondary btn-rounded waves-effect account__button">Załóż konto</button>
                                </form>
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
          </div>
        );
      }
}