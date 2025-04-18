import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {

    state = {
        arrJob: [
            {id: 1, title: 'Developer', salary: '1000'},
            {id: 2, title: 'Tester', salary: '2000'},
            {id: 3, title: 'Manager', salary: '234'},
            {id: 4, title: 'Designer', salary: '6544'},
            {id: 5, title: 'DevOps', salary: '9000'},
        ]
    }

    addJob = (job) =>{
        console.log("hello check job ");
        this.setState({
            arrJob: [...this.state.arrJob, job]
        })
        console.log("check state", job);
    }

    handleDeleteAJob = (job) => {
        let currentJob = this.state.arrJob;
        currentJob = currentJob.filter(item => item.id !== job.id);
        this.setState({
            arrJob: currentJob
        })
    }
    

    render() {
        return (
            <div className="my-component">
                <h1>Hello, World!</h1>
                
                <AddComponent addJob={this.addJob}  />
                <ChildComponent arrJob={this.state.arrJob} handleDeleteAJob={this.handleDeleteAJob}/>
            </div>
        );
    }
}

export default MyComponent;