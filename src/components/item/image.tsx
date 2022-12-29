import { useState } from "react";
import Tooltip from "./tooltip";

export default function BadgeImage(props: any) {

    const [isHover, setHover] = useState(false)
    const handle = () => setHover(!isHover)

    // Images style in-code to avoid a .scss file with 3 lines
    const imageStyle = {
        borderRadius: "50%",
        margin: "5px",
        width: "2rem",
        heigth: "2rem"
    }
    return (
        <span style={
            {
                position: "relative",
                top: "0",
                left: "0"
            }}
            onMouseEnter={handle}
            onMouseLeave={handle}
            >
            <img src={props.src} alt={props.alt} style={imageStyle} />
            <Tooltip text={props.name} active={isHover}/>
        </span>
    );
}

