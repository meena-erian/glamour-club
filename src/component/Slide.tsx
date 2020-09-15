import React from "react";

export default class Slide extends React.PureComponent<{currentPage:number}>{
    render(){
        return (
            <p>{this.props.currentPage}</p>
        );
    }
}