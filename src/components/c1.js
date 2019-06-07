import React, {Component} from 'react';
import C2 from './c2';
export const AppContext = React.createContext();

class C1 extends Component {
    constructor() {
        super();
        this.state = {
            age: 23,
            list: {
                firstName: 'HCL',
                lastName: 'Tech'
            }
        }
    }
    render() {
        return (
            <AppContext.Provider value={this.state}>

                C1: {this.state.list.firstName} - {this.state.list.lastName}
                <C2 />
            </AppContext.Provider>
        )
    }
}

export default C1;