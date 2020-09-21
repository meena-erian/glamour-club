import React, { CSSProperties } from "react";
import Float from "../component/Float";
import Cloud from "../component/Cloud";
import AnimatedBorder from "../component/AnimatedBorder";
import AnimatedLogo from "../component/AnimatedLogo";



export default class Slide0 extends React.PureComponent<{
    isMobile: boolean, index: number, next: Function, setArabic: Function, back: Function, arabic: boolean
}> {

    public state = { stage: 0 };

    constructor(props: any) {
        super(props);
        this.nextSlide = this.nextSlide.bind(this);
    }

    componentDidMount() {
        // Stage = 0 initially on component mount
        setTimeout(() => {
            this.setState({ stage: this.state.stage + 1 });
        }, 3000); // Stage = 1 after 00:00:03

        setTimeout(() => {
            this.setState({ stage: this.state.stage + 1 });
        }, 6000); // Stage = 2 after 00:00:06

        setTimeout(() => {
            this.setState({ stage: this.state.stage + 1 });
        }, 7000); // Stage = 3 after 00:00:07
    }

    nextSlide(isArabic: boolean = false) {
        this.props.setArabic(isArabic);
        this.setState({ stage: this.state.stage + 1 });
        // Stage = 4 once language button is pressed
        setTimeout(() => {
            this.props.next();
        }, 500); // Switching to Slide1, 500ms after language button is pressed
    }

    render() {
        const isMobile = this.props.isMobile;
        const stage = this.state.stage;
        return (
            <div className="animation-canvas">
                <Float x={0} y={-2} style={{ zIndex: 99 }}>
                    <AnimatedBorder stage={stage} isMobile={isMobile} nextSlide={this.nextSlide} />
                </Float>

                <Float x={0} y={0} style={{ zIndex: 100 }}>
                    <AnimatedLogo isMobile={isMobile} stage={stage}/>
                </Float>
                <Float x={0} y={60}>
                    <img
                        style={{
                            width: 150,
                            opacity: stage > 1 ? 0 : 1,
                            transition: "all 1s ease"
                        }}
                        src={"/assets/everlast-white.png"}
                        alt={"everlast logo"}
                    />
                </Float>
                <Float x={0} y={stage > 1 ? 200 : "50vh +  200px"}>
                    <Cloud stage={stage - 2} />
                </Float>
            </div>
        );
    }
}