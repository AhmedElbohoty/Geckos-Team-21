import React, { Component } from "react";
import { Link } from "react-router-dom";

// Importing Components
import Header from "../layout/Header";
import GoalsContainer from "./GoalsContainer";

// Import Data
import { Users } from "../../data";

class Dashboard extends Component {
  //@TODO
  //1- Action to get all goals of user

  render() {
    const user = Users[2];

    return (
      <div>
        <Header />
        <div id="dashboard">
          <h1>My Dashboard</h1>

          <GoalsContainer />

          <Link to="signup" className="add-goal">
            Add Goal
          </Link>
          <div className="active-goals">
            <div>
              <span>Active Goals:</span>
              <span>{user.goal.filter(goal => !goal.isCompleted).length}</span>
            </div>
            <div>
              <span>Finished Goals:</span>
              <span>{user.goal.filter(goal => goal.isCompleted).length}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
