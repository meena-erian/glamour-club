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
                    y={"-25vh - 100px"}
                    style={{ width: "100vw", height: "calc( 50vh + 200px )", overflow: "hidden" }}
                >
                    <Float x={0} y={"25vh - 150px"}>

                        {this.props.component ?
                            <Float x={0} y={stage > 0 && stage < 2 ? 70 : 470}>
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