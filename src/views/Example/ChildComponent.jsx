import React from "react";

class ChildComponent extends React.Component {

    render() {
        // let name = this.props.name;
        // let age = this.props.age;
        let {name, age, arrJob} = this.props;

        return (
            <div className="my-component">
                <h1>Child Component name is {name} and {age}</h1>
                {/* <h4>Job: {arrJob[1].title}</h4> */}
                {arrJob.map((job, index)=>(
                    <div key={index}>
                        <h4>Job: {job.title}</h4>
                        <p>Description: {job.description}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default ChildComponent;