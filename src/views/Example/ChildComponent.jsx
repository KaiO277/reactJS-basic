import React from "react";

class ChildComponent extends React.Component {
    state = {
        showJobs: false
    };

    handleShowHidden = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    };

    handleDeleteJob = (job) => {
        console.log("check delete job", job);
        this.props.handleDeleteAJob(job);
    }

    render() {
        let {showJobs} = this.state;
        let {arrJob} = this.props;
        

        return (
            
            <div className="my-component">
                {this.state.showJobs === false ? <button type="button" onClick={() => this.handleShowHidden()}>Show</button> 
                :
                this.state.showJobs &&
                <>
                <table style={{ width: "100%"}}>
                    <tr>
                        <th>ID</th>
                        <th>Job</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                    {arrJob.map((job, index)=>(
                        <tr key={index}>
                            <td>{job.id}</td>
                            <td> {job.title}</td>
                            <td>{job.salary}</td>
                            <td><button type="button" onClick={() => this.handleDeleteJob(job)}>X</button></td> 
                        </tr>                
                    ))}
                </table>
                <button type="button" onClick={() => this.handleShowHidden()}>Hidden</button>
                </>
            }
            </div>
        );
    }
}

export default ChildComponent;