import React from "react";
import Slides from "../Slides";

interface SlideProps {
    currentPage: number;
    next: Function;
    back: Function;
};

export default class Slide extends React.PureComponent<SlideProps>{
    render() {
        const CurrentSlide = Slides[this.props.currentPage]
        return <CurrentSlide
            index={this.props.currentPage}
            next={this.props.next}
            back={this.props.back}
        />
    }
}