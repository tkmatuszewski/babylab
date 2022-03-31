import React from "react";

const AddProgression = ({ step }) => {

  return (
    <div className="addProgression">
      <div className="progression__circle">
        <span className="progression__couter">{step}/3</span>
      </div>
    </div>
  );
};

export default AddProgression;