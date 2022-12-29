import { stringify } from "querystring";
import styles from "../../styles/item/badge.module.scss"
import colors from "../colors";

export default function Badge(props: any) {

    let color = colors[props.language as keyof typeof colors]
    // Default color for languages not in the list
    if(color == null)
        color = "#f78166"

    return (
        <span style={{borderColor: color, color: color}} className={styles.badge}>
            {props.language}
        </span>
    );
}

