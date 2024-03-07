import React from "react";
import PropTypes from "prop-types";
import C from "../constants/colors";

const Tab = ({ activeTab, label, icon, onClick }) => {
  const handleClick = () => {
    onClick(label);
  };

  let className = "tab-list-item";

  if (activeTab === label) {
    className += " tab-list-active";
  }

  return (
    <li className={className} onClick={handleClick} style={{cursor: 'pointer', display: 'flex', alignItems: 'center', height: 32}}>
      {label}
      {icon && 
      <ion-icon name={icon} style={{ marginLeft: 8, fontSize: '32px'}} className="icon"></ion-icon>
      }
    </li>
  );
}

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tab;
