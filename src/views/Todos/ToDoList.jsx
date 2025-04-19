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
        ]
    };

    addToDoList = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        });
        toast.success("Add new todo success!");
    };

    render() {
        let { listTodos } = this.state;

        return (
            <>
            
            <div className="list-todo-container">
                <AddToDo addToDoList={this.addToDoList} />

                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    <span>{index + 1}</span>
                                    <span>{item.title}</span>
                                    <button>Delete</button>
                                    <button>Edit</button>
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