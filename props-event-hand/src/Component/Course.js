import React, { Component } from "react";

class Course extends Component {
  showName =()=>{
    alert(this.userName.value)
  }
  showButton() {
    const isFree = this.props.free;
    if (isFree === true) {
      return (
        <div className="card-footer">
          <button className="btn btn-primary">View</button>
          <button onClick={this.handleClick} className="btn btn-primary">
            {" "}
            Detail
          </button>
        </div>
      );
    }
 
    return (
      <div className="card-footer">
        <button 
        className="btn btn-primary"
        onClick={this.showName}
        >buy it</button>
        <input
          type="text"
          className="form-control"
          placeholder="userName.."
          ref={(userName) => { this.userName= userName; }}
        ></input>
      </div>
    );
  }

  handleClick = () => {
    alert(this.props.name);
  };
  render() {
    return (
      <div className="col-4">
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">{this.props.free}</p>
            <p>{this.props.time}</p>

            {this.showButton()}
          </div>
        </div>
      </div>
    );
  }
}
export default Course;
