import React, {CSSProperties} from "react";

interface AnimatedBorderProps {
    stage: number; // unique identifier for the current shape of the border regardless of screen size
    isMobile: boolean;
    nextSlide: any;
}

export default function AnimatedBorder(props: AnimatedBorderProps) {
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
        outterStyle.transition = "all .3s ease";
        innerStyle.transition = "all .3s ease";
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
                    onClick={() => props.nextSlide(false)}
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