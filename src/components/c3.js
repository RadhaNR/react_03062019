import React, {Component} from 'react';

import {AppContext} from './c1.js';

class C3 extends Component {
    render() {
        return (
            <AppContext.Consumer >
            {
                value=> value.list.firstName +' ' + value.list.lastName + ' '+ value.age
            }
                
            </AppContext.Consumer>
        )
    }
}

export default C3;