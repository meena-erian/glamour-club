import React, {CSSProperties} from "react";

export default function AnimatedLogo(props:{isMobile:boolean, stage:number}) {
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