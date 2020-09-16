import React from "react";
import { PageContext } from "./PageContext";
import FloatingImage from "./FloatingImage";
import {images} from "../constants";

interface CloudProps {
    stage: number;
}

export default class Cloud extends React.PureComponent<CloudProps>{
    static contextType = PageContext;
    render() {
        const { isMobile, arabic, page, width, height } = this.context;

        return (
            <div>
                
            </div>
        );
    }
}