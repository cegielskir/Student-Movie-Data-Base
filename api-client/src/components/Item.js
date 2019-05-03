import React from 'react';

import Client from '../external-api/client';

function Item({ match }) {
    return (
    <div>
        <main style={{margin: '100px 0 0 0'}}>

            <div className="container">
                <Client title={match.params.id}/>
            </div>
        </main>
      </div>

    );
  }

export default Item;