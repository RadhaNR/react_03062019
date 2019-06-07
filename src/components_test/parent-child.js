import React, {Component} from 'react';
import ChildComponent from './child-component.js';

class ParentChild extends Component {
    constructor() {
        super();
        this.state = {
            name: "Radha"
        }
    }
  nameChange = (newName) => {
        this.setState({name: newName})
    }
    render() {
        return (
            <div>
            Parent: {this.state.name}
                <ChildComponent name={this.state.name} nameChange={this.nameChange}/>
            </div>
        );
    }
}

export default ParentChild;