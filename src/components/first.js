import React, {Component} from 'react';
import Second from './second.js';
import { withTranslation, Translation  } from 'react-i18next';

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
        let { t  } = this.props;
        return (
            <div>
                <div>{t('firstNameLabel')}: {this.state.name}</div>
                <button onClick={this.es6Method}> {t('es6BtnLabel')}</button>
                <button onClick={this.es5Method}>  {t('es5BtnLabel')}</button>
                <button onClick={(event) => this.es6WithParam(1234, event) }>  ES6 With Param</button>
                <Second name={this.state.name} changeName={this.changeName}/>
            </div>
        );
    }
}

export default withTranslation()(First);
