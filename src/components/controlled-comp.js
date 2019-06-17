import React, {Component} from 'react';

class ControlledComp extends Component {
    constructor() {
        super();
        this.state = {
            formData: {
                userName: '',
                sapId: ''
            }
        }
    }
    handleChange = (event) => {
        console.log(event.target.value);
        const {formData} = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
        // this.setState({
        //     [event.target.name]: event.target.value
        // });
    }
    handleClick = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <form>
                    <input name="userName" id="userName" onChange={this.handleChange} value={this.state.formData.userName}/>
                    <input name="sapId" id="sapId" onChange={this.handleChange} value={this.state.formData.sapId}/>
                    <button onClick={this.handleClick}>Submit</button>
                </form>

            </div>
        )
    }
}

// export class UnControlledComp extends Component {

//     handleClick = (event) => {
//         event.preventDefault();
//         console.log(this.userName.value, this.sapId.value);
//         const obj = { userName: this.userName.value, sapId: this.sapId.value };
//         console.log(obj)
//     }

//     render() {
//         return (
//             <div>
//                 <form>
//                     <input name="userName" ref={userName => this.userName = userName}/>
//                     <input name="sapId" ref={(id) => this.sapId = id}/>
//                     <button onClick={this.handleClick}>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

export default ControlledComp;