import React, { Component } from "react";
import Course from "./Component/Course";
import "./App.css";

class App extends Component {
  render() {
    const items = [
      {
        name: "reacjs",
        time: "30h",
        free: true,
      },
      {
        name: "angular",
        time: "30h",
        free: false,
      },
      {
        name: "vue",
        time: "30h",
        free: true,
      },
    ];
    const elmCourse = items.map((item, index) => (
      <Course
        key={index}
        name={item.name}
        free={item.free}
        time={item.time}
      >
      </Course>
    ));
    return (
      <div className="container mt-5">
        <div className="row">
          {elmCourse}
        </div>
      </div>
    );
  }
}

export default App;
