import React from "react";

const HelpButton = ({isDarkMode}) => {
    const helpIconClaro = require("../../assets/light/help.png");
    const helpIconOsucro = require("../../assets/dark/information.png");
    return (
        <div className="helpButton">
            <a href="https://lacuesta.salesianos.edu/contactar/" target="_blank" rel="noreferrer">
            {
                        isDarkMode ? <img src={helpIconOsucro} alt="logo" className="logoImage" /> : <img src={helpIconClaro} alt="logo" className="logoImage" />
                    }
            </a>
        </div>
    );
};

export default HelpButton;
