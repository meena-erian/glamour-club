import React from "react";
import Float from "../component/Float";

interface OfferItemsProps{
    stage: number;
}

export default class OfferItems extends React.PureComponent<OfferItemsProps>{
    render(){
        const {stage} = this.props;
        return  (
            <Float x={-200} y={-200}>
                {stage}
            </Float>
        );
    }
}