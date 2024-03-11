import React from "react";
import ButtonComponent from "./ButtonComponent";
import "../styles/PhotoSelection.css";

const PhotoSelection = ({ text, onClick }) => {
  return (
    <div className="pere">
      <div className="photos"> </div>
      <ButtonComponent
        type={"secondary"}
        text={text}
        onClick={() => onClick()}
      />
    </div>
  );
};

export default PhotoSelection;
