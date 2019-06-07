import React, {Component} from 'react';
import axios from 'axios';

export default function ajaxHoc(WrapperComponent, input) {
    return class extends Component{
        constructor(props) {
            super(props);
            this.state={
                list: []
            }
        }
        componentDidMount() {
            this.getData().then((response)=> {
                console.log(response);
                this.setState({list: response})
            });
        }

        getData = () => {
            return new Promise((resolve, reject) => {
                axios.get(input).then(reponse=> {
                    resolve(reponse.data)
                }).catch(error=> {
                    reject(error)
                })
            })
        }

        render() {
            return (
                <WrapperComponent list={this.state.list} />
            );
        }
    }
}