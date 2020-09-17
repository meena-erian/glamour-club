import React, { CSSProperties } from "react";
import Float from "../component/Float";
import Cloud from "../component/Cloud";

interface AnimatedBorderProps {
    stage: number; // unique identifier for the current shape of the border regardless of screen size
    isMobile: boolean;
    nextSlide: any;
}

function AnimatedBorder(props: AnimatedBorderProps) {
    const outterStyle:CSSProperties = {
        height: props.stage ? 66 : 0,
        marginBottom: props.stage ? 0 : 66,
        overflow: "hidden",
        transition: "all 2s ease"
    }
    var innerStyle:CSSProperties = {
        border: "3px solid white",
        borderRadius: 1000,
        width: 60,
        height: 60,
        backgroundColor: "none",
        color: "rgba(119,193,192)",
        margin: "auto",
        fontSize: 24,
        transition: "all 1s ease"
    }

    if (props.stage > 1) {
        if (props.isMobile)
            innerStyle.width = 290;
        else
            innerStyle.width = 600;

        innerStyle.backgroundColor = "rgba(0,20,0,0.5)";
    }


    let langSwitch = false;
    if (props.stage === 2 || props.stage === 3) {
        langSwitch = true;
    }

    if (props.stage > 3) {
        outterStyle.transition = "all .5s ease";
        innerStyle.transition = "all .5s ease";
        innerStyle.backgroundColor = "inherit";
        innerStyle.width = 290;
        innerStyle.height = 290;
        innerStyle.opacity = 0.3;
        outterStyle.height = 296;
    }

    return (
        <div style={outterStyle}>
            <p style={innerStyle}>
                <span className="lang-button" style={{
                    float: "left",
                    padding: 14,
                    fontWeight: "bold",
                    transition: "all .5s ease",
                    opacity: langSwitch ? 1 : 0
                }}
                    onClick={props.nextSlide}
                >English</span>
                <span className="lang-button" style={{
                    float: "right",
                    padding: 14,
                    fontWeight: "bold",
                    transition: "all .5s ease",
                    opacity: langSwitch ? 1 : 0
                }}
                    onClick={() => props.nextSlide(true)}
                >العربية</span>
            </p>
        </div>
    );
}

function AnimatedLogo(props:{isMobile:boolean, stage:number}) {
    const isMobile = props.isMobile;
    const stage = props.stage;
    var style:CSSProperties = {
        width: 50,
        transition: "all 1s ease",
    }

    if(isMobile && stage > 1){
        style.backgroundColor = "white";
        style.borderRadius = 1000;
        style.transform = "scaleX(-0.1)";
    }

    if(stage > 3){
        style.transition = "all .5s ease";
        style.transform = "scale(5)";
        style.backgroundColor = "inherit";
        style.opacity = 0.3
    }

    return (
        <img
            style={style}
            src={"/assets/logo-white.png"}
            alt={"everlast logo"}
        />
    );
}

export default class Slide0 extends React.PureComponent<{
    isMobile: boolean, index: number, next: Function, setArabic: Function, back: Function
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
                <Float x={0} y={stage > 1 ? 200 : 800}>
                    <Cloud stage={stage - 2} />
                </Float>
            </div>
        );
    }
}