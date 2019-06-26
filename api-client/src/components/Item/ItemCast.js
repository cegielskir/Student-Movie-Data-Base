import React, {Component} from 'react';

import { ACCESS_TOKEN, API_BASE_URL } from '../../api/constants';

class ItemCast extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendComment = this.sendComment.bind(this);
    }

    handleInputChange(event) {
        this.setState({content: event.target.value});
    }

    sendComment(event) {
        event.preventDefault();
        const request = { 
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + ACCESS_TOKEN,
            }),
            body: {
                content: this.state.content,
                title: this.props.title,
            }
        }

        console.log(request)
        fetch(API_BASE_URL + '/ratings', request)  
        .then(function(res) {
          return res.json();
         })
        .then(function(resJson) {
              return resJson;
         })
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
                                        <form>
                    <div className="form-group">
           
                        <textarea className="form-control" id="comment" rows="8" value={this.state.content} onChange={this.handleInputChange}></textarea>
                    </div>

                        <button onClick={this.sendComment} className="btn btn-outline-secondary ">
                            Dodaj komentarz
                        </button>
                    </form>
                  </div> 
                : <p>Zaloguj się, aby móc dodawać i czytać komentarze!</p> }
            </div>
            </div>
        );
          
    }
}
export default ItemCast;