import React, {Component} from 'react';

class UnControlledComponent extends Component {
    handleSubmit = (event) =>{
        event.preventDefault();
        let obj = {userName: this.userName.value, sapId: this.sapId.value};
        console.log(obj)
    }
    render() {
        return (
            <form>
                <input name="userName" ref={userName=> this.userName = userName}/>
                <input name="sapId" ref={id => this.sapId = id}/>
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}
export default UnControlledComponent;