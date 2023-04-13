import React from "react";

const HelpButton = () => {
    const helpIcon = require("../../assets/light/help.png");
    return (
        <div className="helpButton">
            <a href="https://lacuesta.salesianos.edu/contactar/" target="_blank" rel="noreferrer">
                <img src={helpIcon} className="iconoBotonHelp" alt="" srcset="" />
            </a>
        </div>
    );
};

export default HelpButton;
