import React, {Component} from 'react';
import Second from './second.js';

class First extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'HCL'
        }

        this.es5Method = this.es5Method.bind(this);
    }

    es6Method = () => {
        console.log("in click method");
        this.setState({ name: Math.random() })
    }

    es5Method() {
        this.setState({ name: Math.random() })
    }

    es6WithParam(data, event) {
        console.log(data, event);
        this.setState({ name: data })
    }

    changeName = (data) => {
        console.log(data)
        this.setState({name: data});
    }
    render() {
        console.log("in render")
        return (
            <div>
                <div>Name: {this.state.name}</div>
                <button onClick={this.es6Method}>  Es6 fun</button>
                <button onClick={this.es5Method}>  ES5 fun</button>
                <button onClick={(event) => this.es6WithParam(1234, event) }>  ES6 With Param</button>
                <Second name={this.state.name} changeName={this.changeName}/>
            </div>
        );
    }
}

export default First;
