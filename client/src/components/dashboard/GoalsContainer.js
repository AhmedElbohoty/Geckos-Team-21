import React, { Component } from "react";

// Data
import { Users } from "../../data";

// Importing Component
import GoalTitle from "./GoalTitle";
import Goal from "./Goal";

class GoalsContainer extends Component {
  //@TODO
  // 1- Replacing ind with goal Id
  // 2- Action to get all goals of user

  render() {
    const user = Users[2];

    const goals = user.goal.map((goal, ind) => {
      return (
        <Goal
          key={ind}
          id={ind + 1}
          goalTitle={goal.goalTitle}
          startDate={goal.startDate}
          endDate={goal.endtDate}
          isCompleted={goal.isCompleted}
        />
      );
    });

    return (
      <div className="goals-container">
        <GoalTitle />
        {goals}
      </div>
    );
  }
}

export default GoalsContainer;
