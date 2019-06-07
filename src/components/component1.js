import React, {Component} from 'react';
import Component2 from './Component2';

export const AppContext = React.createContext();

class Component1 extends Component {
    constructor() {
        super();
        this.state = {
            name: "HCL",
              list: {
                firstName: 'Radha',
                lastName: 'Nanjundaswamy'
            }
        }
    }
    render() {
        return (
            <AppContext.Provider value={this.state.list}>
            Component1: {this.state.list.firstName } - {this.state.list.lastName } 
            <Component2 firstName={this.state.list.firstName} lastName={this.state.list.lastName } />
            </AppContext.Provider>
        )
    }
}

export default Component1;