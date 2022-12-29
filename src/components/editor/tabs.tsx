import { useEffect, useState } from "react";
import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";
import styles from "../../styles/editor/tabs.module.scss"

export default function Tabs(props: any) {

    return (
        <div className={styles.wrapper}>
            <ul className={styles.container}>
                {props.files.map((f: string, i: number) => {
                    let style = styles.tabButton + " "
                    if(f == props.active)
                        style += styles.active
                    return <li onClick={() => {props.setActive(props.files[i])}}  className={style} key={"tab" + f+i}>
                        <span>{f}</span>
                    </li>
                })}
            </ul>
        </div>
    );
}

