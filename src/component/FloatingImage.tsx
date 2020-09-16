import React, { CSSProperties } from "react";
import Float from "./Float";

interface FloatingImageProps{
    x: number;
    y: number;
    src: string;
    width?: number;
    style?: CSSProperties;
}

export default class FloatingImage extends React.PureComponent<FloatingImageProps>{
    render(){
        return (
            <Float x={this.props.x} y={this.props.y}>
                <img src={this.props.src} alt={this.props.src} width={this.props.width } style={this.props.style} />
            </Float>
        );
    }
}