import React, {Component} from 'react';


class ChildComponent extends Component {
    render() {
        return (
            <div>
                Child: {this.props.name}
                <button onClick={()=> this.props.nameChange(Math.random())}>Change from Child</button>
            </div>
        );
    }
}

export default ChildComponent;