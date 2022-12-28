import styles from "../../styles/item/tooltip.module.scss"

export default function Tooltip(props: any) {

    return (
        <span className={props.active ? styles.tooltip + " " + styles.active : styles.tooltip}>
            {props.text}
        </span>
    );
}

