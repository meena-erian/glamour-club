import React from "react";
import { images } from "../constants";
import Image from "../component/Image";

interface NavBarProps{
    isMobile: boolean;
    arabic: boolean;
}

export default class NavBar extends React.PureComponent<NavBarProps> {
    render() {
        const {isMobile, arabic} = this.props;
        return (
            <div style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: 50,
                backgroundColor: "rgba(0,0,0,0.3)"
            }}>
                <Image src={isMobile?images.WOMENS_DAY_MOBILE:images.WOMENS_DAY} style={{
                    height: 30,
                    padding: 10,
                    float: "left"
                }} />
                <Image src={isMobile?images.LOGO_NAV_MOBILE:images.LOGO_NAV} style={{
                    height: 30,
                    padding: 10,
                    float: "right"
                }}/>
            </div>
        );
    }
}