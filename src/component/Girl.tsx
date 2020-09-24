import React from "react";
import Float from "./Float";
import FloatingImage from "./FloatingImage";
import {images} from "../constants";

interface GirlProps {
    x: number | string;
    y: number | string;
    reaction: number;
}

export default class Girl extends React.PureComponent<GirlProps>{
    render(){
        const {x, y, reaction} = this.props;
        return(
            <Float x={x} y={y}>
                <FloatingImage x={0} y={20} src={images.GIRL_0} style={{transition: "all .5s ease", opacity: reaction === 0?1:0, transform: "translate(0, -50%)"}} width={250}/>
                <FloatingImage x={0} y={0} src={images.GIRL_1} style={{transition: "all .5s ease", opacity: reaction === 1?1:0, transform: "translate(0, -50%)"}} width={400}/>
                <FloatingImage x={0} y={0} src={images.GIRL_2} style={{transition: "all .5s ease", opacity: reaction === 2?1:0, transform: "translate(20px, -50%)"}} width={430}/>
                <FloatingImage x={0} y={0} src={images.GIRL_3} style={{transition: "all .5s ease", opacity: reaction === 3?1:0, transform: "translate(50px, -50%)"}} width={350}/>
                <FloatingImage x={0} y={0} src={images.GIRL_4} style={{transition: "all .5s ease", opacity: reaction === 4?1:0, transform: "translate(8px, -50%)"}} width={420}/>
                <FloatingImage x={0} y={0} src={images.GIRL_5} style={{transition: "all .5s ease", opacity: reaction === 5?1:0, transform: "translate(22px, -50%)"}} width={430}/>
                <FloatingImage x={0} y={0} src={images.GIRL_6} style={{transition: "all .5s ease", opacity: reaction === 6?1:0, transform: "translate(25px, -50%)"}} width={420}/>
                <FloatingImage x={0} y={0} src={images.GIRL_7} style={{transition: "all .5s ease", opacity: reaction === 7?1:0, transform: "translate(-15px, -50%)"}} width={390}/>
                <FloatingImage x={0} y={0} src={images.GIRL_8} style={{transition: "all .5s ease", opacity: reaction === 8?1:0, transform: "translate(0, -50%)"}} width={430}/>
            </Float>
        );
    }
}