import React, {Component} from 'react';

import { API_BASE_URL } from '../../api/constants';

class ItemCast extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: '',
            review: '',
            comments: [],
            isLoaded: false,
            userToken: localStorage.getItem('accessToken'),
            isAddedComment: false,
            isAddedReview: false,
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendComment = this.sendComment.bind(this);
        this.handleReviewChange = this.handleReviewChange.bind(this);
        this.sendReview = this.sendReview.bind(this);
        this.getComments = this.getComments.bind(this);
    }

    componentDidMount(){
        this.getComments();
    }

    handleInputChange(event) {
        this.setState({content: event.target.value});
    }

    handleReviewChange(event) {
        this.setState({review: event.target.value});
    }

    sendComment(event) {
        event.preventDefault();
        const request = { 
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.state.userToken ,
            },
            body: JSON.stringify({
                'content': this.state.content
            })
        }

        fetch(API_BASE_URL + '/comment/' + this.props.id, request)  
        .then(function(res) {
          return res.json();
         })
        .then(resJson => {
              this.setState({
                isLoaded: true,
                isAddedComment: true
              })
              this.getComments();
              return resJson;
         }).catch(error => {
             console.log(error);
         })
    }

    sendReview(event) {
        event.preventDefault();
        const request = { 
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.state.userToken,
            },
            body: JSON.stringify({
                'content': this.state.content
            })
        }

        fetch(API_BASE_URL + '/review/' + this.props.id, request)  
        .then(function(res) {
          return res.json();
         })
        .then(resJson => {
              this.setState({
                isLoaded: true,
                isAddedReview: true
              })
              this.getComments();
              return resJson;
         }).catch(error => {
             console.log(error);
         })
    }

    getComments() {
        const request = { 
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }

        fetch(API_BASE_URL + '/comment/' + this.props.id, request)  
        .then(function(res) {
          return res.json();
         })
        .then(resJson => {
              this.setState({
                  content: '',
                  comments: resJson,
                  isLoaded: true
              })
         }).catch(error => {
             console.log(error);
         })
    }

    renderComments() {
        return this.state.comments.map((comment, index) => (
            <div key={index}>
                {   comment.user ?
                    <div>
                    <p><b> {comment.user.username}</b> piszę: </p>
                    <p className="comment__content">{comment.content}</p>
                    </div>
                    :
                    <div></div>
                }
            </div>
        ));
    }

    render() {
        let actors = this.props.actors;
        return (
            <div>
                {actors !== undefined ? actors.split(",").map(actor => {
                    return <li key={actor}>{actor}</li>    
                }) 
                : null
                }
            <br/>
            <div>
              { localStorage.getItem('accessToken') 
                ? <div>
                  <h3>Komentarze użytkowników</h3>
                  { this.state.isLoaded && this.state.comments !== [] ? this.renderComments() : <div></div> }
                    { this.state.isAddedComment
                    ?
                    <p>Dziękujemy za dodanie komentarza!</p>
                    :
                    <form>
                        <div className="form-group">
                            <textarea className="form-control" id="comment" rows="8" value={this.state.content} onChange={this.handleInputChange}></textarea>
                        </div>
                        <button onClick={this.sendComment} className="btn btn-outline-secondary ">
                            Dodaj komentarz
                        </button>
                    </form>
                    }
                    <br />
                    { this.state.isAddedReview ?
                    <p>Dziękujemy za dodanie recenzji!</p>
                    :
                    <>
                    <h3>Dodaj własną recenzję!</h3>
                    <br />
                    <form>
                    <div className="form-group">
                        <textarea className="form-control" id="review" rows="8" value={this.state.review} onChange={this.handleReviewChange}></textarea>
                    </div>

                        <button onClick={this.sendReview} className="btn btn-outline-secondary ">
                            Dodaj recenzję
                        </button>
                    </form>
                    </>
                    }
                  </div> 
                :
                <> 
                    <p>Zaloguj się, aby móc dodawać i czytać komentarze!</p> 
                </>
                }
            </div>
            </div>
        );
          
    }
}
export default ItemCast;