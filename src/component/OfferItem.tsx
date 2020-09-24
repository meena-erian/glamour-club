import React, { CSSProperties } from "react";
import {offer} from "../constants";
import Float from "./Float";

interface OfferItemProps{
    arabic: boolean;
    isMobile: boolean;
    id: number;
}



export default class OfferItem extends React.PureComponent<OfferItemProps>{
    render(){
        const {arabic, isMobile, id} = this.props;
        const thisOffer = offer[id];
        var numberStyle: CSSProperties = {
            borderRadius: 1000,
            backgroundColor: "white",
            color: "rgba(119,193,192)",
            padding: 7,
            transition: "all .5s ease"
        }
        return (<div>
            <div style={numberStyle}>{thisOffer.count}</div>
        </div>);
    }
}
