import React, {Component} from 'react';
import {AppContext} from './component1'
class Component3 extends Component {
    render() {
        return (
            

            <AppContext.Consumer>
                    {value =>
                         value.firstName + value.lastName
                    }
                </AppContext.Consumer>
        )
    }
}

export default Component3;