import React, {Component} from 'react';
import ChildComponent from './child-component.js';

export default class StateProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'HCL'
        }

        this.es5Function = this.es5Function.bind(this);
    }
    es6Function = () => {
        this.setState({name: "HCL" + Math.random()})
    }
    es5Function() {
        this.setState({name: "HCL" + Math.random()})
    } 
    changeName = (e)=> {
        console.log(e)
    }
    render() {
        return (
            <div>
             <div style={{color: 'red', backgroundColor: 'yellow'}}>
                State: {this.state.name} - <button onClick={this.es6Function}>ES6 function</button>
                <button onClick={this.es5Function}>ES5 Function</button></div>
             <div>
                <button onClick={this.changeName(124)}>On CHnage</button>
                Props: <ChildComponent name={this.state.name}/>
             </div>
            </div>
        );
    }
}