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
    render() {
        let {showJobs} = this.state;
        let {arrJob} = this.props;
        

        return (
            
            <div className="my-component">
                {this.state.showJobs === false ? <button type="button" onClick={() => this.handleShowHidden()}>Show</button> 
                :
                this.state.showJobs &&
                <>
                {arrJob.map((job, index)=>(
                    <div key={index}>
                        <h4>Job: {job.title}</h4>
                        <p>Description: {job.description}</p>
                    </div>
                ))}
                <button type="button" onClick={() => this.handleShowHidden()}>Hidden</button>
                </>
            }
            </div>
        );
    }
}

export default ChildComponent;