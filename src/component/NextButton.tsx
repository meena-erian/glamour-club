import React from "react";
import {exclamations} from "../constants/offer";

interface NextButtonProps{
    onClick?: any;
    stage: number;
    disabled?: boolean;
    arabic: boolean;
}

export default class NextButton extends React.PureComponent<NextButtonProps>{
    render(){
        const {onClick, stage, disabled, arabic} = this.props;
        const currentText = exclamations[stage];
        return(
            <div style={{ // Shadow wrapper div
                overflow: "visible"
            }}>
                <p style={{
                        border: "3px solid white",
                        borderRadius: 1000,
                        padding: 10,
                        color: "rgb(119, 193, 192)",
                        fontSize: 24,
                        transition: "all 1s ease 0s",
                        backgroundColor: "rgba(0, 20, 0, 0.5)",
                        boxShadow: "0px 3px 5px rgba(0,0,0, 0.5)",
                        width: "max-content"
                }}>
                    <span
                        className={disabled?"button":"button active"}
                        onClick={disabled?undefined:onClick}
                    >
                        {arabic?currentText.ar:currentText.en}
                    </span>
                </p>
            </div>
        );
    }
}