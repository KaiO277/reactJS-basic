import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {

    state = {
        firtname: "",
        lastname: "",
    }

    handleChangeFirstname = (event) => {
        this.setState({ firtname: event.target.value });
    }

    handleChangeLastname = (event) => {
        this.setState({ lastname: event.target.value });
    }

    handleSubmited = () => {
        console.log(this.state.firtname, this.state.lastname);
        alert(`Hello ${this.state.firtname} ${this.state.lastname}`);
    } 

    render() {
        return (
            <div className="my-component">
                <h1>Hello, World!</h1>
                
                <form >
                    <label >First name:</label>
                    <input type="text" value={this.state.firtname} onChange={(event)=> this.handleChangeFirstname(event)}/><br/>
                    <label >Last name:</label>
                    <input type="text" value={this.state.lastname} onChange={(event) => this.handleChangeLastname(event)}/><br/>
                    <input type="button" onClick={this.handleSubmited} value="submit"/>
                </form>
                <ChildComponent name={'Nghia'} age={'23'} />
            </div>
        );
    }
}

export default MyComponent;