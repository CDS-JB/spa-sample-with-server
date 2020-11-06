import React from 'react';
class EditStaff extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          name: props.name,
          email: props.email
        };
    }

    changeName(ev) {
        console.info(ev.target.value)
        this.setState(
            {name: ev.target.value}
        )
      }

     changeEmail(ev) {
        console.info(ev.target.value)
        this.setState(
            {email: ev.target.value}
        )
      }

      updateParent(){
          this.props.updateEvent(
            {
                arIndex: this.props.arIndex,
                name: this.state.name,
                email: this.state.email
            }
          );
      }

      deleteParent(){
        this.props.deleteEvent(
            {
                arIndex: this.props.arIndex
            }
          );
      }
  
    render() {
      return (
        <div className="editStaff">
            <h2>Edit Staff</h2>
            <div>
                <label>Staff Name</label>
                <input type="text" id="staffName" value={this.state.name} onChange={(ev) => this.changeName(ev) }  />
            </div>
            <div>
                <label>Staff Email</label>
                <input type="text" id="staffEmail" value={this.state.email} onChange={(ev) => this.changeEmail(ev) }  />
            </div>
            <div>
                <button className="btn edit" onClick={(ev) => this.updateParent() }>Update</button>
            </div>
            <div>
                <button className="btn del" onClick={(ev) => this.deleteParent() }>Delete</button>
            </div>
        </div>
      );
    }
  }

  export default EditStaff;