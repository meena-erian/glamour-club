import React from "react";
//import { PageContext } from "./PageContext";
import FloatingImage from "./FloatingImage";
import { images } from "../constants";
import Float from "./Float";

interface CloudProps {
    stage: number;
}

export default class Cloud extends React.PureComponent<CloudProps>{
    //static contextType = PageContext;
    render() {
        //const { isMobile, arabic, page, width, height } = this.context;

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
                y={-250}
                style={{width:"100vw", height: 500, overflow: "hidden"}}
                >
                    <FloatingImage
                        x={0}
                        y={this.props.stage>0&&this.props.stage<2 ? 70 : 470}
                        src={images.TWO_GIRLS}
                        width={500}
                    />
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