import React from "react";
import Cloud from "../component/Cloud";
import Float from "../component/Float";
import AnimatedBorder from "../component/AnimatedBorder";
import AnimatedLogo from "../component/AnimatedLogo";
import NavBar from "../component/NavBar";
import NextButton from "../component/NextButton";
import Girl from "../component/Girl";


export default class Slide extends React.PureComponent<{ isMobile: boolean, index: number, next: any, setArabic: any, back: any, arabic: boolean }> {
    public state = { stage: 0 };
    constructor(props: any){
        super(props);
        this.next = this.next.bind(this);
    }
    next(){
        if(this.state.stage === 8) this.setState({stage: 0});
        else this.setState({stage: this.state.stage + 1});
    }
    render() {
        const { index, back, next, isMobile, arabic } = this.props;
        const stage = this.state.stage
        return (
            <div className="animation-canvas">
                <Float x={0} y={-6} style={{ zIndex: 0 }}>
                    <AnimatedBorder stage={4} isMobile={isMobile} nextSlide={next} />
                </Float>
                <Float x={0} y={0} style={{ zIndex: 0 }}>
                    <AnimatedLogo isMobile={isMobile} stage={4} />
                </Float>
                <NavBar isMobile={isMobile} arabic={arabic} shown />
                <Float x={0} y={200}>
                    <Cloud stage={0} component={
                        <Girl x={0} y={0} reaction={stage} />
                    }/>
                    <Float x={0} y={0}>
                        <NextButton text={arabic?"ماذا تشمل؟":"What does it include?"} onClick={this.next}/>
                    </Float>
                    <Float x={100} y={0}>
                        {stage}
                    </Float>
                </Float>
            </div>
        );
    }
}