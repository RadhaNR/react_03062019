import React, {Component} from 'react';

class ControlledComponent extends Component {
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
        const {formData} = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({formData});
    }
    handleSubmit=(event) =>{
        event.preventDefault();
        console.log(this.state.formData)
    }
    render() {
        return (
            <form>
                <input name="userName" onChange={this.handleChange}/>
                <input name="sapId" onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}
export default ControlledComponent;