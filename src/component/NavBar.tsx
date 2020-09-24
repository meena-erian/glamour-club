import React from "react";
import { images } from "../constants";
import Image from "../component/Image";
import Title from "../component/Title";

interface NavBarProps{
    isMobile: boolean;
    arabic: boolean;
    shown?: boolean;
}

export default class NavBar extends React.PureComponent<NavBarProps> {
    public state = {visible: this.props.shown?true:false}
    componentDidMount(){
        setTimeout(()=>{
            this.setState({visible: true})
        }, 14000);
    }
    render() {
        const {isMobile, arabic, shown} = this.props;
        return (
            <div style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: this.state.visible?70:0,
                backgroundColor: "rgba(0,0,0,0.3)",
                transition: "all 1s ease",
                overflow: "hidden"
            }}>
                <Image src={isMobile?images.WOMENS_DAY_MOBILE:images.WOMENS_DAY} style={{
                    height: 50,
                    paddingTop: 10,
                    paddingLeft: isMobile?10:20,
                    float: "left"
                }} />
                {shown && <Title arabic={arabic} stage={4} relative/>}
                <Image src={isMobile?images.LOGO_NAV_MOBILE:images.LOGO_NAV} style={{
                    height: 50,
                    paddingTop: 10,
                    paddingRight:isMobile?10:20,
                    float: "right"
                }}/>
            </div>
        );
    }
}