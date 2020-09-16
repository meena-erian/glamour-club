import React, { CSSProperties } from "react";

interface ImageProps{
    src: string;
    width?: number;
    style?: CSSProperties;
}

export default class Image extends React.PureComponent<ImageProps>{
    render(){
        return (
            <img src={this.props.src} alt={this.props.src} width={this.props.width } style={this.props.style} />
        );
    }
}