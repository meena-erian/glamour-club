import React from "react";
import Cloud from "../component/Cloud";
import Float from "../component/Float";
import AnimatedBorder from "../component/AnimatedBorder";
import AnimatedLogo from "../component/AnimatedLogo";

export default class Slide extends React.PureComponent<{ isMobile: boolean, index: number, next: any, setArabic: any, back: any, arabic: boolean }> {
    public state = { stage: 0 };
    render() {
        const { index, back, next, isMobile } = this.props;
        const stage = this.state.stage
        return (
            <div className="animation-canvas">
                <Float x={0} y={-2} style={{ zIndex: 99 }}>
                    <AnimatedBorder stage={4} isMobile={isMobile} nextSlide={next} />
                </Float>
                <Float x={0} y={0} style={{ zIndex: 100 }}>
                    <AnimatedLogo isMobile={isMobile} stage={4} />
                </Float>
                <Float x={0} y={200}>
                    <Cloud stage={0} />
                </Float>
            </div>
        );
    }
}