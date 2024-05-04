import React from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";
import { BrowserRouter, useNavigate, useLocation } from 'react-router-dom';
import Search from "../screens/Search";
import Recipe from "../screens/Recipe";
import Profile from "../screens/Profile";
import C from "../constants/colors";
import { AuthContext } from '../constants/Context';

const Tabs = ({ activeTab, onTabChange }) => {
  const navigate = useNavigate();
  const {signOut} = React.useContext(AuthContext);
  const location = useLocation();

  const handleTabChange = (tab) => {
    onTabChange(tab);
    if(tab === 'Chercher'){
      navigate('search');
    } else if(tab === 'Recettes'){
      navigate('recipe');
    } else if(tab === 'Profil'){
      navigate('profile');
    }
  };

  React.useEffect(() => {
    console.log(location);
    if(location.pathname = "/"){
      onTabChange("Chercher");
      navigate('search');
    }
  }, []);

  React.useEffect(() => {
    if((activeTab === "Chercher") && !(location.pathname.startsWith("/search"))){
      onTabChange("Chercher");
      navigate('search');
    } else if((activeTab === "Recettes") && !(location.pathname.startsWith("/recipe"))){
      onTabChange("Recettes");
      navigate('recipe');
    } else if((activeTab === "Profil") && !(location.pathname.startsWith("/profile"))){
      onTabChange("Profil");
      navigate('profile');
    }
  }, [location.pathname])


  return (
    <div className="tabs" style={{ width: "100%" }}>
      <div
        className="tab-box"
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: C.white,
        }}
      >
        <img src={require('../assets/images/Logo.png')} alt="Image" style={{ marginLeft: "60px", marginRight: "16px", 
        height: '84px', width: '84px', resizeMode: 'contain' }}/>
        <div style={{flex: 1}}></div>
        <ol
          className="tab-list"
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "60px",
          }}
        >
          <Tab
            activeTab={activeTab}
            label="Chercher"
            onClick={() => handleTabChange("Chercher")}
          >
            {"Chercher"}
          </Tab>
          <Tab
            activeTab={activeTab}
            label="Recettes"
            onClick={() => handleTabChange("Recettes")}
          >
            {"Recettes"}
          </Tab>
          <Tab
            activeTab={activeTab}
            label="Profil"
            icon="person-circle"
            onClick={() => handleTabChange("Profil")}
          >
            {"Profil"}
          </Tab>
          <div style={{height: "30px", fontSize: "30px", color: C.green, cursor: 'pointer', 
          marginBottom: '12px', marginLeft: "16px", alignSelf: "flex-end"}} 
          onClick={() => {
            navigate("/");
            signOut();
          }}>
            <ion-icon name="log-out-outline"></ion-icon>
          </div>  
        </ol>
      </div>
      <div className="tab-content">
        {activeTab === "Chercher" && <Search />}
        {activeTab === "Recettes" && <Recipe />}
        {activeTab === "Profil" && <Profile />} 
      </div>
    </div>
  );
};

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
};

export default Tabs;
