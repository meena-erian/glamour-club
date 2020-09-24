import React, { CSSProperties } from "react";
import { offer } from "../constants";
import Float from "./Float";

interface OfferItemProps {
    arabic: boolean;
    isMobile?: boolean;
    id: number;
    onCloud?: boolean;
}



export default class OfferItem extends React.PureComponent<OfferItemProps>{
    constructor(props: any) {
        super(props);
        this.renderCloud = this.renderCloud.bind(this);
        this.renderCycle = this.renderCycle.bind(this);
    }
    renderCloud() {
        const { arabic, id } = this.props;
        const thisOffer = offer[id];
        const count = parseInt(thisOffer.count) || 1000;
        const text = arabic ? thisOffer.ar : thisOffer.en;
        var outerStyle:CSSProperties = {
            color: "rgba(119,193,192)"
        }
        var h3Style:CSSProperties = {
            margin: 0,
            lineHeight: "30px",
            fontSize: "25px"
        }
        var pstyle:CSSProperties = {
            fontSize: "15px",
            margin: 0,
            lineHeight: "15px"
        }
        var priceTag:CSSProperties = {
            color: "white",
            backgroundColor: "rgba(119,193,192)",
            padding: 0,
            paddingLeft: 5,
            paddingRight: 5,
            fontFamily: "sans-serif",
            borderRadius: 10000
        }
        if (arabic) {
            return (<div style={outerStyle}>
                <h3 style={h3Style}>{thisOffer.count} {text}</h3>
                <p style={pstyle}><small style={priceTag}>السعر الاصلى</small> AED {thisOffer.price}{count > 1 ?" للجلسة":""}</p>
            </div>);
        }
        else {
            return (<div style={outerStyle}>
                <h3 style={h3Style}>{thisOffer.count} {text}</h3>
                <p style={pstyle}><small style={priceTag}>Original Price</small> AED {thisOffer.price}{count > 1 ?" per session":""}</p>
            </div>);
        }
    }
    renderCycle() {
        const { arabic, isMobile, id } = this.props;
        const thisOffer = offer[id];
        var numberStyle: CSSProperties = {
            borderRadius: 1000,
            backgroundColor: "white",
            color: "rgba(119,193,192)",
            paddingLeft: 13,
            paddingRight: 13,
            fontWeight: "bold",
            transition: "all .5s ease"
        }
        return (<div>
            <div style={numberStyle}>{thisOffer.count}</div>
        </div>);
    }
    render() {
        if (this.props.onCloud) {
            return this.renderCloud();
        }
        else {
            return this.renderCycle();
        }
    }
}
