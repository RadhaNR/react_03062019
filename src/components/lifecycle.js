import React, {Component} from 'react';

class Lifecyle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "HCL",
            show: true
        }
        console.log("in cons")
    }

    componentWillMount() {
        console.log("in componentWillMount")
    }

    componentDidMount() {
 console.log("in componentDidMount")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("in shouldComponentUpdate", nextProps, nextState)
        //console.log(nextState, this.state.name, nex)
        if(nextState.show === this.state.show) {
             return false;
        } else {
            return true;
        }
       
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("in componentWillUpdate",  nextProps, nextState)
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("in componentWillUpdate",  prevProps, prevState)
    }


    componentWillUnmount() {
console.log("in componentWillUnmount")
    }

    change=()=> {
        this.setState({name:'XYZ', show: !this.state.show})
        //this.forceUpdate();
    }
    render() {
        console.log("In render")
        return (
            <div>
                {this.state.name}     <button onClick={this.change}>Click</button>   
                {this.state.show ? <div>Hello</div>: ""}        
            </div>
        )
    }
}

export default Lifecyle;