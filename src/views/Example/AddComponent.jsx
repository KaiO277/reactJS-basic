import React from "react";

class AddComponent extends React.Component {
    state ={
        title: "",
        salary: "",
    }

    handleChangeTitle = (event) => {
        this.setState({ title: event.target.value });
    }

    handleChangeSalary = (event) => {
        this.setState({ salary: event.target.value });
    }

    handleSubmited = (event) => {
        event.preventDefault();
        if (!this.state.title || !this.state.salary){
            alert("Missing required parameters!");
            return;
        }
        this.props.addJob({
            id : Math.floor(Math.random() * 100),
            title: this.state.title,
            salary: this.state.salary
        });
        this.setState({
            title: "",
            salary: ""
        })
    } 
    render() {
        return(
            <>
                <form >
                    <label >Title's Job:</label>
                    <input type="text" value={this.state.title} onChange={(event)=> this.handleChangeTitle(event)}/><br/>
                    <label >Salary:</label>
                    <input type="text" value={this.state.salary} onChange={(event) => this.handleChangeSalary(event)}/><br/>
                    <input type="button" onClick={this.handleSubmited} value="submit"/>
                </form>
            </>
        )
    }
}

export default AddComponent;