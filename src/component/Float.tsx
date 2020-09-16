import React from "react";

interface FloatProps{
    x:number; // X Displacement from the onigin in pixels
    y:number; // Y Displacement from the origin in pixels
    transitionDelay?: string;
}

export default class Float extends React.Component<FloatProps>{
    render(){
        const transitionDelay = this.props.transitionDelay || "1s";
        return (
            <div style={{
                position: "absolute",
                left: `calc( 50% + ${this.props.x}px )`,
                top: `calc( 50% + ${this.props.y}px )`,
                transform: "translate(-50%, -50%)",
                transition: `all ${transitionDelay} ease`
            }}>
                {this.props.children}
            </div>
        );
    }
}