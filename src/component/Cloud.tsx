import React from "react";
//import { PageContext } from "./PageContext";
import FloatingImage from "./FloatingImage";
import {images} from "../constants";

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