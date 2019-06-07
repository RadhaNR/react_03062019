import React, {Component} from 'react';

class LifecycleComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            name: "HCL",
            show: true
        }
        console.log("in constructor")
    }

    componentWillMount() {
        console.log("In componentWillMount")
    }
    componentDidMount() {
        console.log("in componentDidMount")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("in shouldComponentUpdate", nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("in componentWillUpdate", nextProps, nextState)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("in componentDidUpdate", prevProps, prevState)
    }

    componentWillUnmount() {
        console.log("in componentWillUnMount")
    }

    change = () => {
        this.setState({name: Math.random(), show: !this.state.show})
        console.log(this)
    }
    getInitialState() {
    console.log("in getInitialState")
}
  
    render() {
        console.log("in render")
        return (
            <div>
                {this.state.name} <button onClick={this.change}>Change</button>
               {this.state.show? "shown": "hidden"} 
            </div>
        )
    }
}

export default LifecycleComponent;