import React from 'react';
import "./Home.css";
import logo from "../../assets/images/logo.png";
import apppic1 from "../../assets/images/apppic1_v2.webp";
import apppic2 from "../../assets/images/apppic3_v2.webp";
import apppic3 from "../../assets/images/apppic4.webp";

function Home() {
    return (
        <div className="container">
            <img src={logo} alt="Logo" className="logo-image"/>
            <h1 className="app-name">ElevTool</h1>
            <h2 className="details-text">Organiser eleverne i din køreskole nemt og sikkert.</h2>
            <div className="download-container">
                <div className="download-btn"><a href="https://apps.apple.com/dk/app/elevtool/id1634489221">Download</a></div>
                <p className="available-txt">Tilgængelig på iPhone og iPad</p>
            </div>
            
            <div className="app-image-container">
                <div className="app-image">
                    <h3>Overblik over holdstarter</h3>
                    <img src={apppic1} alt="App screenshot 1"/>
                </div>
                <div className="app-image">
                    <h3>Informationer om eleverne</h3>
                    <img src={apppic2} alt="App screenshot 2"/>
                </div>
                <div className="app-image">
                    <h3>Statistikker over køreskolen</h3>
                    <img src={apppic3} alt="App screenshot 3"/>
                </div>
            </div>
        </div>
    );
}

export default Home;