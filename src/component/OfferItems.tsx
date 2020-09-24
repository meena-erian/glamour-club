import React from "react";
import Float from "../component/Float";

interface OfferItemsProps {
    arabic: boolean;
    isMobile: boolean;
    stage: number;
}

export default class OfferItems extends React.PureComponent<OfferItemsProps>{
    render() {
        const { stage } = this.props;
        var x1 = 300; const y1 = -100;
        var x2 = -300; const y2 = -100;
        var x3 = -300; const y3 = 0;
        var x4 = -300; const y4 = 100;
        var x5 = 300; const y5 = 0;

        if (stage > 0) x1 = -113;
        if (stage > 1) x2 = 113;
        if (stage > 2) x3 = 153;
        if (stage > 3) x4 = 113;
        if (stage > 4) x5 = -163;

        return (
            <Float x={0} y={0}>
                <Float x={"-25vw"} y={0} id="left-offer-items" style={{ width: "50vw", height: "100vh", overflow: "hidden" }}>
                    <Float x={"25vw"} y={0}>
                        <Float x={x1} y={y1}>1</Float>
                        <Float x={x5} y={y5}>5</Float>
                    </Float>
                </Float>
                <Float x={"25vw"} y={0} id="right-offer-items" style={{ width: "50vw", height: "100vh", overflow: "hidden" }}>
                    <Float x={"-25vw"} y={0}>
                        <Float x={x2} y={y2}>2</Float>
                        <Float x={x3} y={y3}>3</Float>
                        <Float x={x4} y={y4}>4</Float>
                    </Float>
                </Float>
            </Float>
        );
    }
}