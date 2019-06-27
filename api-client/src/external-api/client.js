import React, { Component } from 'react';

import ItemDetails from '../components/Item/ItemDetails';
import ItemCast from '../components/Item/ItemCast';

import { ACCESS_TOKEN, API_BASE_URL } from './constants'

class Client extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: props.title,
        movieDetails: [],
        isLoading: false,
        error: null,
      }
    }

  componentDidMount() {
    let url = API_BASE_URL + "?apikey=" + ACCESS_TOKEN + "&t=" + this.state.title;
    this.setState({ isLoading: true });

    fetch(url)
      .then(response => {
          if(response.ok){
              return response;
          }
          throw Error("Fetch error")
      })
      .then(response => response.json())
      .then(data => {
          this.setState(prevState => ({
              movieDetails: data,
              isLoading: false,
              error: false,
          }))
      })
      .catch(err => {
          console.log(err);
          this.setState(prevState => ({
              error: true,
              isLoading: false
          }))
      });
 
   }

    render() {
      //console.log(this.props);
      return (
        <div>
            <section>
                <div className="row">
                    <div className="col-md-3">
                        <img alt="movie-poster" style={{width: '100%',}} src={this.state.movieDetails.Poster}/>
                    </div>
                    <div className="col-md-9">
                        <ItemDetails details={this.state.movieDetails}/>
                    </div>
                </div>
            </section>
            <section>
                <div className="row">
                    <div className="col-md-12">
                        <h3>Obsada</h3>
                        <ItemCast id={this.props.id} title={this.props.title} actors={this.state.movieDetails.Actors} />
                    </div>
                </div>
            </section>
        </div>
      );
    }
  }
  
  
  export default Client;
