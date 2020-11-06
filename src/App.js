import React, { Component } from 'react';
import './App.css';
import Staff from './Staff/Staff'
import EditStaff from './Staff/EditStaff'
import AddStaff from './Staff/AddStaff'
import Clock from './MyClasses/Clock'

class App extends Component {

  constructor() {
    super();
    this.state = {
      currentStaffNum : null,
      staffMembers: []
    };
}

  // Hard Coded Data - replaced by fetch
  // state = {
  //   currentStaffNum : null,
  //   staffMembers: [
  //     { name: "Jane", email: "jane@company.com" },
  //     { name: "Bob", email: "bob@company.com" },
  //     { name: "Ralph", email: "ralph@bocompanyb.com" }
  //   ]
  //   //  staffMembers: []
  // }

  componentDidMount(){
    fetch('./data/staff.json')
    .then(resp => {
      return resp.json();
    })
    .then(myData => {
      console.dir(myData);
      this.setState(
        {
          staffMembers : myData
        }
      )
    })
  }

  // needs to be an arrow function for this
  setCurrentStaffNum = (newVal) =>  {  
    this.setState({
      currentStaffNum: newVal
    })

  }

  updateStaff = (updateData) => {
    console.dir(updateData);
    let tempStaffAr = this.state.staffMembers;
    console.dir(tempStaffAr[updateData.arIndex]);
    tempStaffAr[updateData.arIndex] = {
      name: updateData.name,
      email: updateData.email,
    }
    this.setState({
      currentStaffNum : null,
      staffMembers : tempStaffAr
    })
  }  

  addStaff = (addData) => {
    console.dir(addData);
    let tempStaffAr = this.state.staffMembers;
    tempStaffAr.push(addData)
    this.setState({
      currentStaffNum : null,
      staffMembers : tempStaffAr
    })
  }

  deleteStaff = (updateData) => {
    console.dir(updateData);
    let tempStaffAr = this.state.staffMembers;
    console.dir(tempStaffAr[updateData.arIndex]);
    tempStaffAr.splice(updateData.arIndex, 1)
    this.setState({
      currentStaffNum : null,
      staffMembers : tempStaffAr
    })
  }  

  render() {
    // render conditions
    let editBox;
    let myEv = this.setCurrentStaffNum;
    if(this.state.currentStaffNum === null){
      editBox = <div>Not Set</div>
    }else {
      editBox = 
      <EditStaff 
      name={this.state.staffMembers[this.state.currentStaffNum].name} 
      arIndex={this.state.currentStaffNum} 
      email={this.state.staffMembers[this.state.currentStaffNum].email} 
      updateEvent={this.updateStaff} 
      deleteEvent={this.deleteStaff} 
      />
    }

    let staffAr = this.state.staffMembers.map(function(obj, i)   {
      return <Staff key={i} name={obj.name} email={obj.email} editEvent={(ev) => myEv(i)} >Some content</Staff>;
    })

    // now render
    return (
      <div className="App">
        <header>
          <h1>SPA - Editor</h1>
          <div>
            <Clock />
          </div>
        </header>
        <main>
          <div className="staffGrid">
          {staffAr}
          </div>
          <div className="sideBar">
            {editBox}
            <div>
            <AddStaff addEvent={this.addStaff} />
            </div>
          </div>
      </main>
      </div>
    );
  }
}

export default App;
