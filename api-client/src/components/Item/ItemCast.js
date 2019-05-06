import React, {Component} from 'react';

class ItemCast extends Component {
    render() {
        let actors = this.props.actors;
        return (
            <div>
                {actors !== undefined ? actors.split(",").map(actor => {
                    return <li><a href="/">{actor}</a></li>    
                }) 
                : null
                }
            </div>
        );
          
    }
}
export default ItemCast;