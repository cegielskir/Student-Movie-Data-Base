import React, { Component } from 'react';

class OAuth2RedirectHandler extends Component {
    getUrlParameter(name) {
        /*eslint no-useless-escape:*/
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        var results = regex.exec(this.props.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    render() {        
        const token = this.getUrlParameter('token');
        const error = this.getUrlParameter('error');
        console.log(this.props.location.search);
        console.log(error, token);
        if(token) {
            localStorage.setItem('accessToken', token);

        } else {

        }

        return (
            <div>Redirect page</div>       
        );
    }
}

export default OAuth2RedirectHandler;