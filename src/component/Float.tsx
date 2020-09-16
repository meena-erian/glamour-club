import React from "react";

interface FloatProps{
    x:number; // X Displacement from the onigin in pixels
    y:number; // Y Displacement from the origin in pixels
}

export default class Float extends React.Component<FloatProps>{
    render(){
        return (
            <div style={{
                position: "absolute",
                left: `calc( 50% + ${this.props.x}px )`,
                top: `calc( 50% + ${this.props.y}px )`,
                transform: "translate(-50%, -50%)"
            }}>
                {this.props.children}
            </div>
        );
    }
}