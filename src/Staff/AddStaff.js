import React from 'react';
class AddStaff extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
        };
    }

    changeName(ev) {
        console.info(ev.target.value)
        this.setState(
            { name: ev.target.value }
        )
    }

    changeEmail(ev) {
        console.info(ev.target.value)
        this.setState(
            { email: ev.target.value }
        )
    }

    addParent() {
        this.props.addEvent(
            {
                name: this.state.name,
                email: this.state.email
            }
        );
        //reset form
        this.setState(
            {
                name: "",
                email: ""
            }
        )
    }

    render() {
        return (
            <div className="addStaff">
                <h2>Add Staff</h2>
                <div>
                    <label>Staff Name</label>
                    <input type="text" id="staffName" value={this.state.name} onChange={(ev) => this.changeName(ev) }  />
                </div>
                <div>
                    <label>Staff Email</label>
                    <input type="text" id="staffEmail" value={this.state.email} onChange={(ev) => this.changeEmail(ev) }  />
                </div>
                <div>
                <button className="btn add" onClick={(ev) => this.addParent()}>Add</button>
                </div>
            </div>
        );
    }
}

export default AddStaff;