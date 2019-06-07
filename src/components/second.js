

import React, {Component} from 'react';

class Second extends Component {

    changeName =()=> {
        
        
    }
    render() {
        return (
            <div>Second: {this.props.name}
                <button onClick={()=>this.props.changeName(Math.random())}>change</button>
            </div>

        );
    }
}

export default Second;

