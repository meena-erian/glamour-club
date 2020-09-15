import React from "react";

export default function (props: { index: number, next: any, back: any }) {
    return (
        <div>
            <h1>{props.index}</h1>
            <img src={"/assets/back-cloud.png"} alt={"slide-"+props.index} />
            <button onClick={props.back}>Back</button>
            <button onClick={props.next}>Next</button>
        </div>
    );
}