import React from "react";
import Float from "./Float";
import OfferItem from "./OfferItem";


interface OfferItemsProps {
    arabic: boolean;
    isMobile: boolean;
    stage: number;
}

export default class OfferItems extends React.PureComponent<OfferItemsProps>{
    render() {
        const { stage, isMobile, arabic } = this.props;
        var x1 = 0,  y1 = 0, h1 = true;
        var x2 = -0, y2 = 0, h2 = true;
        var x3 = -0, y3 = 0, h3 = true;
        var x4 = -0, y4 = 0, h4 = true;
        var x5 = 0,  y5 = 0, h5 = true;

        if (stage > 0) {
            x1 = -110; y1 = -100; h1 = false;
        }
        if (stage > 1) {
            x2 = 84; y2 = -120; h2 = false;
        }
        if (stage > 2) {
            x3 = 143; y3 = -40; h3 = false;
        }
        if (stage > 3) {
            x4 = 137; y4 = 50; h4 = false;
        }
        if (stage > 4) {
            x5 = -147; y5 = 0; h5 = false;
        }

        return (
            <Float x={0} y={0}>
                <Float x={"-25vw"} y={0} id="left-offer-items" style={{ width: "50vw", height: "100vh", overflow: "hidden" }}>
                    <Float x={"25vw"} y={0}>
                        <Float x={x1} y={y1}><OfferItem arabic={arabic} isMobile={isMobile} id={0} hidden={h1}/></Float>
                        <Float x={x5} y={y5}><OfferItem arabic={arabic} isMobile={isMobile} id={4} hidden={h5}/></Float>
                    </Float>
                </Float>
                <Float x={"25vw"} y={0} id="right-offer-items" style={{ width: "50vw", height: "100vh", overflow: "hidden" }}>
                    <Float x={"-25vw"} y={0}>
                        <Float x={x2} y={y2}><OfferItem arabic={arabic} isMobile={isMobile} id={1} hidden={h2}/></Float>
                        <Float x={x3} y={y3}><OfferItem arabic={arabic} isMobile={isMobile} id={2} hidden={h3}/></Float>
                        <Float x={x4} y={y4} style={{zIndex: stage>3?5:0}}><OfferItem arabic={arabic} isMobile={isMobile} id={3} hidden={h4}/></Float>
                    </Float>
                </Float>
            </Float>
        );
    }
}