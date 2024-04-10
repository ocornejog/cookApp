import React from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";
import C from "../constants/colors";

const Tabs = ({ activeTab, onTabChange, children }) => {
  return (
    <div className="tabs" style={{width: "100%"}}>
        <div className="tab-box" style={{ display: "flex", alignItems: "center", backgroundColor: C.white }}>
            <img src={require('../assets/images/Logo.png')} alt="Image" style={{ marginLeft: "60px", marginRight: "16px", 
            height: '84px', width: '84px', resizeMode: 'contain' }}/>
            <div style={{flex: 1}}></div>
            <ol className="tab-list" style={{ display: "flex", alignItems: "center", marginRight: "60px" }}>
            {children.map((child) => {
                const { label } = child.props;

                return (
                <Tab
                    activeTab={activeTab}
                    key={label}
                    label={label}
                    icon={child.props.icon}
                    onClick={() => onTabChange(label)}
                />
                );
            })}
            </ol>
        </div>
        <div className="tab-content">
            {children.map((child) => {
              const { label } = child.props;
              return (
              <div key={label} style={{ display: label === activeTab ? 'block' : 'none' }}>
                {child.props.children}
              </div>
              );
            })}
        </div>
    </div>
  );
};

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
  children: PropTypes.instanceOf(Array).isRequired,
};

export default Tabs;
