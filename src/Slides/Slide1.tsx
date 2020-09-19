import React from "react";
import Cloud from "../component/Cloud";
import Float from "../component/Float";
import FloatingImage from "../component/FloatingImage";
import AnimatedBorder from "../component/AnimatedBorder";
import AnimatedLogo from "../component/AnimatedLogo";
import {images, text} from "../constants"
import NavBar from "../component/NavBar";


export default class Slide extends React.PureComponent<{ isMobile: boolean, index: number, next: any, setArabic: any, back: any, arabic: boolean }> {
    public state = { stage: 0 };
    componentDidMount(){
        // Stage = 0 initially on component mount
        setTimeout(() => {
            this.setState({ stage: this.state.stage + 1 });
        }, 1000); // Stage = 1

        setTimeout(() => {
            this.setState({ stage: this.state.stage + 1 });
        }, 5000); // Stage = 2

        setTimeout(() => {
            this.setState({ stage: this.state.stage + 1 });
        }, 6000); // Stage = 3

        setTimeout(() => {
            this.setState({ stage: this.state.stage + 1 });
        }, 14000); // Stage = 4

        setTimeout(() => {
            this.setState({ stage: this.state.stage + 1 });
        }, 15000); // Stage = 5

    }
    render() {
        const { index, back, next, isMobile, arabic } = this.props;
        const stage = this.state.stage;

        var Text1Y = 0;
        var Text2Y = 0;
        var ImageY = 0;

        if(stage>0) Text1Y = -425;
        if(stage>1) Text1Y = -900;
        if(stage>2) Text2Y = -425;
        if(stage>3) Text2Y = -900;
        if(stage>4) ImageY = -375;

        return (
            <div className="animation-canvas">
                <Float x={0} y={-2} style={{ zIndex: 0 }}>
                    <AnimatedBorder stage={4} isMobile={isMobile} nextSlide={next} />
                </Float>
                <Float x={0} y={0} style={{ zIndex: 0 }}>
                    <AnimatedLogo isMobile={isMobile} stage={4} />
                </Float>
                <NavBar isMobile={isMobile} arabic={arabic}/>
                <Float x={0} y={200}>
                    <Cloud stage={0} 
                        component={
                            <Float x={0} y={0}>
                                <Float x={0} y={Text1Y} style={{width: "90vw", maxWidth: "480px"}}>
                                    {arabic? text.HEADLINE_1_ARABIC : text.HEADLINE_1_ENGLISH}
                                </Float>
                                <Float x={0} y={Text2Y} style={{width: "90vw", maxWidth: "480px"}}>
                                    {arabic? text.HEADLINE_2_ARABIC : text.HEADLINE_2_ENGLISH}
                                </Float>
                                <FloatingImage x={0} y={ImageY} src={images.GIRL_0} width={250}/>
                            </Float>
                        }
                    />
                </Float>
            </div>
        );
    }
}