import React from "react";
import Cloud from "../component/Cloud";
import Float from "../component/Float";
import FloatingImage from "../component/FloatingImage";
import AnimatedBorder from "../component/AnimatedBorder";
import AnimatedLogo from "../component/AnimatedLogo";
import {images, text} from "../constants"
import NavBar from "../component/NavBar";


function Title(props:{arabic:boolean, stage: number}){
    const {arabic, stage} = props;
    return <div style={{transition: "all 0.5s ease",transform: stage>3?"scale(0.7)": "none"}}>
        <h2 style={{margin:0}}>{arabic?'نادى الإشراق':'Glamour Club'}</h2>
        <p style={{margin:0, transform: "translateY(-11px)"}}>
            <small>{arabic?'العضوية السانوية':'Annual Membership'}</small>
        </p>
    </div>;
}


type CSSDistance = number | string;

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

        var Text1Y:CSSDistance = 200;
        var Text2Y:CSSDistance = 200;
        var TitleY:CSSDistance = 200;
        var ImageY:CSSDistance = 200;

        if(stage>0) Text1Y = -200; // Show text 1
        if(stage>1) Text1Y = '-100vh'; // Hide text 1
        if(stage>2) {
            Text2Y = -300; // Show text 2
            TitleY = -200; // Show title
        }
        if(stage>3) {
            Text2Y = '-100vh'; // Hide text 2
            TitleY = '-200px - 50vh + 37px'; // Place Title on navbar
        }
        if(stage>4) ImageY = -150; // Show girl Image

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
                                <Float x={0} y={TitleY} style={{width: `calc( 90vw - 40px - ${isMobile?180:420}px )`}}>
                                    <Title stage={stage} arabic={arabic}/>
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