import React from 'react';
import { API_BASE_URL } from '../api/constants'

class Admin extends React.Component {
    state = {
        userRole: '',
        commentsList: [],
        reviewsList: [],
        loaded: false,
    }

    componentDidMount() {
        this.getCurrentUser();
        this.getAllComments();
        this.getAllReviews();
    }

    componentDidUpdate() {
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

        return this.request({
            url: API_BASE_URL + "/comments",
            method: 'GET'
        })
        .then(response => {
            this.setState({
                loaded: true,
                commentsList: response
            })
        }).catch(error => {
            console.log(error);
        });
    }

    getAllReviews = () =>  {

        return this.request({
            url: API_BASE_URL + "/reviews",
            method: 'GET'
        })
        .then(response => {
            this.setState({
                loaded: true,
                reviewsList: response
            })
        }).catch(error => {
            console.log(error);
        });
    }

    getCurrentUser = () =>  {
    
        return this.request({
            url: "http://localhost:5000/user/me",
            method: 'GET'
        })
        .then(response => {
            this.setState({
                userRole: response.roles[0].name
            })
            return response.roles[0].name;
        }).catch(error => {
            console.log(error);
        });
    }

    deleteReview = (Id) =>  {
        return this.request({
            url: API_BASE_URL + "/review/" + Id,
            method: 'DELETE'
        })
        .then(response => {
            this.setState({
                loaded: false
            })
        })
        .then(() => {
            this.props.history.push('/admin');
        })
        .catch(error => {
            console.log(error);
        });

        
    }

    acceptReview = (Id) =>  {
        return this.request({
            url: API_BASE_URL + "/review/" + Id,
            method: 'PUT'
        })
        .then(response => {
            this.setState({
                loaded: false
            })
        })
        .then(() => {
            this.props.history.push('/admin');
        })
        .catch(error => {
            console.log(error);
        });
    }


    deleteComment = (Id) =>  {
        return this.request({
            url: API_BASE_URL + "/comment/" + Id,
            method: 'DELETE'
        })
        .then(response => {
            this.setState({
                loaded: false
            });
        })
        .then(() => {
            this.props.history.push('/admin');
        })
        .catch(error => {
            console.log(error);
        });
    }

    renderComments() {
        return this.state.commentsList.map((comment, index) => (
            <div key={index}>
                {   comment.user ?
                    <div className="row">
                        <div className="col-11">
                            <p><b> {comment.user.username}</b> piszę: </p>
                            <p className="comment__content">{comment.content}</p>
                        </div>
                        <div className="col-1">
                            <button type="button" className="btn btn-danger admin__button" onClick={() => this.deleteComment(comment.id)}>Usuń</button>
                        </div>
                    </div>
                    :
                    <div></div>
                }
            </div>
        ));
    }

    renderReviews() {
        return this.state.reviewsList.map((comment, index) => (
            <div key={index}>
                {   comment.user ?
                    <div className="row">
                        <div className="col-10">
                            <p><b> {comment.user.username}</b> napisał recenzję: </p>
                            <p className="comment__content">{comment.content}</p>
                        </div>
                        <div className="col-1">
                            <button type="button" className="btn btn-danger admin__button" onClick={() => this.deleteReview(comment.id)}>Odrzuć</button>
                        </div>
                        <div className="col-1">
                            <button type="button" className="btn btn-success admin__button" onClick={() => this.acceptReview(comment.id)}>Akceptuj</button>
                        </div>                    </div>
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
                                    <h2>Komentarze użytkowników</h2>
                                    { this.renderComments() }
                                    <h2>Recenzję użytkowników</h2>
                                    { this.renderReviews() }
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