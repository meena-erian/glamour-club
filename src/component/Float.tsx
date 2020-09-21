import React, { CSSProperties } from "react";

interface FloatProps{
    x:number|string; // X Displacement from the onigin in pixels
    y:number|string; // Y Displacement from the origin in pixels
    transitionDelay?: string;
    style?: CSSProperties;
    id?: string;
}

export default class Float extends React.Component<FloatProps>{
    render(){
        const transitionDelay = this.props.transitionDelay || "1s";
        const x = (typeof this.props.x === 'string')? this.props.x : this.props.x + 'px';
        const y = (typeof this.props.y === 'string')? this.props.y : this.props.y + 'px';
        return (
            <div 
            id={this.props.id}
            style={{
                position: "absolute",
                left: `calc( 50% + ${x} )`,
                top: `calc( 50% + ${y} )`,
                transform: "translate(-50%, -50%)",
                transition: `all ${transitionDelay} ease`,
                ...this.props.style
            }}>
                {this.props.children}
            </div>
        );
    }
}