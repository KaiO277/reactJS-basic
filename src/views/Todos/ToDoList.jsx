import React from "react";
import "./ToDoList.scss";
import AddToDo from "./AddToDo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ToDoList extends React.Component {
    state = {
        listTodos: [
            { id: 1, title: 'Doing homework' },
            { id: 2, title: 'Doing exercise' },
            { id: 3, title: 'Doing project' },
        ],
        editTodo: {}
    };

    addToDoList = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        });
        toast.success("Add new todo success!");
    };

    handleDeleteToDo = (todo) =>{
        let currentListToDo = this.state.listTodos;
        currentListToDo = currentListToDo.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentListToDo
        })
        toast.error("Delete a todo!");        
    }

    handleEditTodo = (todo) => {
        this.setState({
            editTodo : todo 
        })
    }

    handleChangeEdit = (event) => {
        let editTodoCopy = {...this.state.editTodo};
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo : editTodoCopy  
        })
    }

    render() {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        return (
            <>
            
            <div className="list-todo-container">
                <AddToDo addToDoList={this.addToDoList} />

                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ? 
                                    <span>{index+1} - {item.title}</span>
                                    :
                                    <>
                                    {item.id === editTodo.id ?
                                        <span>
                                            {index +1} - <input value={editTodo.title} onChange={(event)=>this.handleChangeEdit(event)}/>
                                        </span>
                                        :
                                        <span>{index + 1} - {item.title}</span>
                                    }
                                    </>
                        }
                                    <button onClick={()=>this.handleDeleteToDo(item)}>Delete</button>
                                    <button onClick={()=>this.handleEditTodo(item)}>Edit</button>
                                </div>
                            );
                        })}
                </div>
                
            </div>
            </>
        );
    }
}

export default ToDoList;