import React, {Component} from 'react';
import Component3 from './Component3';

class Component2 extends Component {
    render() {
        return (
            <div>
            Component2: {this.props.firstName } - {this.props.lastName }
            <Component3 />
            </div>
        )
    }
}

export default Component2;