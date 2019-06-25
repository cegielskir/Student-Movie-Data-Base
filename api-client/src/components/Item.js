import React from 'react';

import Client from '../external-api/client';

function Item({ match }) {
    return (
    <div>
        <main style={{margin: '100px 0 40px 0'}}>

            <div className="container">
                <Client title={match.params.id}/>

            <div>
              { localStorage.getItem('accessToken') 
                ? <div>
                  <h3>Komentarze użytkowników</h3>
                                        <form>
                    <div className="form-group">
           
                        <textarea className="form-control" id="comment" rows="8"></textarea>
                    </div>

                        <button className="btn btn-outline-secondary ">
                            Dodaj komentarz
                        </button>
                    </form>
                  </div> 
                : <p>Zaloguj się, aby móc dodawać i czytać komentarze!</p> }
            </div>
            </div>
        </main>
      </div>

    );
  }

export default Item;