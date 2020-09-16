import React from "react";
import Float from "../component/Float";

interface AnimatedBorderProps {
    stage: number; // unique identifier for the current shape of the border regardless of screen size
    isMobile: boolean;
}

function AnimatedBorder(props: AnimatedBorderProps) {
    const outterStyle = {
        height: props.stage ? 66 : 0,
        marginBottom: props.stage ? 0 : 66,
        overflow: "hidden",
        transition: "all 2s ease"
    }
    let innerStyle = {
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
    if (props.stage === 2) {
        langSwitch = true;
    }

    return (
        <div style={outterStyle}>
            <p style={innerStyle}>
                <span className="lang-button" style={{
                    float: "left",
                    padding: 14,
                    fontWeight: "bold",
                    opacity: langSwitch ? 1 : 0
                }}>English</span>
                <span className="lang-button" style={{
                    float: "right",
                    padding: 14,
                    fontWeight: "bold",
                    opacity: langSwitch ? 1 : 0
                }}>العربية</span>
            </p>
        </div>
    );
}

export default class Slide0 extends React.PureComponent<{ isMobile:boolean, index: number, next: any, back: any }> {

    public state = { stage: 0 };
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({ stage: this.state.stage + 1 });
        }, 3000);

        setTimeout(() => {
            this.setState({ stage: this.state.stage + 1 });
        }, 6000)
    }

    render() {
        const isMobile = this.props.isMobile;
        const stage = this.state.stage;
        return (
            <div>
                <Float x={0} y={-2}>
                    <AnimatedBorder stage={stage} isMobile={isMobile} />
                </Float>

                <Float x={0} y={0}>
                    <img
                        style={{
                            width: 50,
                            transition: "all 1s ease",
                            backgroundColor: isMobile && stage > 1 ? "white" : "none",
                            borderRadius: isMobile && stage > 1 ? 1000 : "none",
                            transform: isMobile && stage > 1 ? "scaleX(-0.1)" : "none"
                        }}
                        src={"/assets/logo-white.png"}
                        alt={"everlast logo"}
                    />
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
            </div>
        );
    }
}