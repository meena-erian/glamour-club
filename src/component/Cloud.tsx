import React from "react";
//import { PageContext } from "./PageContext";
import Image from "./Image";
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
                <Image 
                    src={images.BACK_CLOUD}
                    width={500}
                />
            </div>
        );
    }
}