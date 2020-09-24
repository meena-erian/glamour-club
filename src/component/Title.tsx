import React from "react";

export default function Title(props: { arabic: boolean, stage: number, relative?: boolean }) {
    const { arabic, stage, relative } = props;
    return <div style={{ transition: "all 0.5s ease", transform: stage > 3 ? "scale(0.7)" : "none", display: relative ? "inline-block" : "block" }}>
        <h2 style={{ margin: 0 }}>{arabic ? 'نادى الإشراق' : 'Glamour Club'}</h2>
        <p style={{ margin: 0, transform: "translateY(-11px)" }}>
            <small>{arabic ? 'العضوية السانوية' : 'Annual Membership'}</small>
        </p>
    </div>;
}