import React from 'react';
import { ACCESS_TOKEN, API_BASE_URL } from '../api/constants'

class Admin extends React.Component {
    state = {
        userRole: '',
        commentsList: [],
        reviewsList: [],
    }

    componentDidMount() {
        this.getCurrentUser();
        this.getAllComments();
        this.getAllReviews();
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
    
    getAllComments = () =>  {
        if(!ACCESS_TOKEN) {
            return Promise.reject("No access token set.");
        }
    
        return this.request({
            url: API_BASE_URL + "/comments",
            method: 'GET'
        })
        .then(response => {
            console.log(this.state)
            this.setState({
                commentsList: response
            })
        }).catch(error => {
            console.log(error);
        });
    }

    getAllReviews = () =>  {
        if(!ACCESS_TOKEN) {
            return Promise.reject("No access token set.");
        }
    
        return this.request({
            url: API_BASE_URL + "/reviews",
            method: 'GET'
        })
        .then(response => {
            console.log(this.state)
            this.setState({
                reviewsList: response
            })
        }).catch(error => {
            console.log(error);
        });
    }

    getCurrentUser = () =>  {
        if(!ACCESS_TOKEN) {
            return Promise.reject("No access token set.");
        }
    
        return this.request({
            url: "http://localhost:5000/user/me",
            method: 'GET'
        })
        .then(response => {
            console.log(this.state)
            this.setState({
                userRole: response.roles[0].name
            })
            return response.roles[0].name;
        }).catch(error => {
            console.log(error);
        });
    }

    renderComments() {
        return this.state.commentsList.map((comment, index) => (
            <div key={index}>
                {   comment.user ?
                    <div>
                    <p><b> {comment.user.username}</b> piszę: </p>
                    <p className="comment__content">{comment.content}</p>
                    <button type="button" className="btn btn-success">Akceptuj</button>
                    <button type="button" className="btn btn-danger">Odrzuć</button>
                    </div>
                    :
                    <div></div>
                }
            </div>
        ));
    }

    render() {
        return (
            <div>
                <main style={{margin: '100px 0 40px 0'}}>
                    <div className="container">
                        {this.state.userRole === 'ROLE_ADMIN'  
                            ?   <>
                                    <p>Witaj administratorze</p>
                                    { this.renderComments() }
                                    <p>Wypisz recenzję</p>
                                    <p>Dodaj film</p>
                                    <p>Dodaj aktora</p>
                                </> 

                            :  <p>Lepiej się zaloguj jako admin!</p>}
                    </div>
                </main>
              </div>
        );
    }
}

export default Admin;