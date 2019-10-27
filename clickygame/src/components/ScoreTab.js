import React, { Component } from "react";

const ScoreTab = (props) => {
    return (
        <div className="ScoreTab">
            <li>
            {props.message}
            </li>
            <li>{`Score: ${props.wins} wins and ${props.losses} losses`}</li>
        </div>
    )
};

export default ScoreTab;