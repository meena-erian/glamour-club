import React from "react";
import { PageContext } from "./PageContext";
import Slide from "./Slide";

export default class Wizard extends React.PureComponent {
    static contextType = PageContext;
    render() {
        return (
            <div>
                <Slide currentPage={this.context.page} />
                <button onClick={this.context.next}>Next</button>
                <button onClick={this.context.back}>Back</button>
            </div>
        );
    }
}