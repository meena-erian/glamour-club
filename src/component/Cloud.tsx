import React from "react";
//import { PageContext } from "./PageContext";
import FloatingImage from "./FloatingImage";
import { images } from "../constants";
import Float from "./Float";

interface CloudProps {
    component?: any;
    image?: string;
    stage: number;
}

export default class Cloud extends React.PureComponent<CloudProps>{
    render() {
        let { image, stage } = this.props;

        if (!image) image = images.TWO_GIRLS;

        return (
            <div>
                <FloatingImage
                    x={0}
                    y={0}
                    src={images.BACK_CLOUD}
                    width={600}
                />
                <Float
                    x={0}
                    y={-500}
                    style={{ width: "100vw", height: 1000, overflow: "hidden" }}
                >
                    <Float x={0} y={250}>
                    
                    {this.props.component? 
                    <Float x={0} y={stage>0&&stage<2?70:470}>
                        {this.props.component}
                    </Float>
                    :
                    <FloatingImage
                        x={0}
                        y={stage > 0 && stage < 2 ? 70 : 470}
                        src={image}
                        width={500}
                    />}
                    </Float>
                </Float>

                <FloatingImage
                    x={0}
                    y={0}
                    src={images.FRONT_CLOUD}
                    width={600}
                />
            </div>
        );
    }
}