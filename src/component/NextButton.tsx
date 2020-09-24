import React from "react";

export default class NextButton extends React.PureComponent{
    render(){
        return(
            <div style={{ // Shadow wrapper div
                overflow: "visible"
            }}>
                <p style={{
                        border: "3px solid white",
                        borderRadius: 1000,
                        //width: 290
                        //height: 60,
                        padding: 10,
                        color: "rgb(119, 193, 192)",
                        //margin: auto;
                        fontSize: 24,
                        transition: "all 1s ease 0s",
                        backgroundColor: "rgba(0, 20, 0, 0.5)",
                        boxShadow: "0px 3px 5px rgba(0,0,0, 0.5)"
                }}>
                    test
                </p>
            </div>
        );
    }
}