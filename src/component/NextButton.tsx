import React from "react";

interface NextButtonProps{
    onClick?: any;
    text: string;
    disabled?: boolean;
}

export default class NextButton extends React.PureComponent<NextButtonProps>{
    render(){
        const {onClick, text, disabled} = this.props;
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
                        {text}
                    </span>
                </p>
            </div>
        );
    }
}