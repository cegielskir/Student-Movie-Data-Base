import React, {Component} from 'react';

export default class Logging extends Component {
    render() {
        return (
          <div>
            <main>
                <section id="account-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <h3>Załóż konto</h3>
                                <form>
                                    <div class="form-group">
                                        <label for="name">Imię i nazwisko</label>
                                        <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="Imię i nazwisko" />
                                    </div>
                                    <div class="form-group">
                                        <label for="username">Nickname</label>
                                        <input type="text" class="form-control" id="username" aria-describedby="username" placeholder="Nickname" />
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" />
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Hasło</label>
                                        <input type="password" class="form-control" id="password" placeholder="Hasło" />
                                    </div>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" required/>
                                        <label class="form-check-label" for="exampleCheck1">Akceptuję regulamin serwisu SMDb wraz z jego Politykę Prywatności oraz zasadami pokrewnymi.</label>
                                    </div>
                                    <button type="button" className="btn btn-outline-secondary btn-rounded waves-effect account__button">Załóż konto</button>
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
          </div>
        );
      }
}