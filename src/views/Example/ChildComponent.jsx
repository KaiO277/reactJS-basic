import React from "react";

class ChildComponent extends React.Component {

    render() {
        // let name = this.props.name;
        // let age = this.props.age;
        let {name, age} = this.props;

        return (
            <div className="my-component">
                <h1>Child Component name is {name} and {age}</h1>
            </div>
        );
    }
}

export default ChildComponent;