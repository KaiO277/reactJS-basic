import React from "react";
import { ToastContainer, toast } from 'react-toastify'

class AddToDo extends React.Component{
    state = {
        title: ""
    }

    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleAddNewToDo = () => {
        if (!this.state.title){
            toast.error("Missing title!");
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 1000),
            title: this.state.title
        }
        this.props.addToDoList(todo);
        this.setState({
            title: ""
        })
        
    }

    render(){
        return(
            <div className="add-todo">
                <input type="text" value={this.state.title} onChange={(event)=>this.handleOnChangeTitle(event)} />
                <button type="button" onClick={()=>this.handleAddNewToDo()}>Add</button>
            </div>
        )
    }
}

export default AddToDo;