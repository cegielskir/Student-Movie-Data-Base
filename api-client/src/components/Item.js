import React from 'react';

import Client from '../external-api/client';

function Item(props, { match }) {
    //console.log(props)
    return (
    <div>
        <main style={{margin: '100px 0 40px 0'}}>

            <div className="container">
                <Client id={props.location.state.movieID} title={props.match.params.id}/>
            </div>
        </main>
      </div>

    );
  }

export default Item;