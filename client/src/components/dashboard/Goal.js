import React from "react";
import { Link } from "react-router-dom";

const Goal = props => {
  //@TODO
  //1- Action to delete goal

  const { id, goalTitle, startDate, endDate, isCompleted } = props;

  return (
    <div className="goal">
      <div>{id}</div>
      <div>
        <Link to={"/goals/" + id}>{goalTitle}</Link>
      </div>
      <div>{startDate}</div>
      <div>{endDate}</div>
      <div>{isCompleted ? "Finished" : "Active"}</div>
      <div className="delete">X</div>
    </div>
  );
};

export default Goal;
