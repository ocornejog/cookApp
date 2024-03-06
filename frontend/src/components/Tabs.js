import React, { useState } from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";
import C from "../constants/colors";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };

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
                    onClick={onClickTabItem}
                />
                );
            })}
            </ol>
        </div>
        <div className="tab-content">
            {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
            })}
        </div>
    </div>
  );
}

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
};

export default Tabs;
