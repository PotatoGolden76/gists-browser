import styles from "../styles/item.module.scss"
import Badge from "./item/badge";

export default function Item(props: any) {

    return (
        <li className={styles.body}>
            <h2 className={styles.title}>{(props.data["description"] != null && props.data["description"] !== "") ? props.data["description"] : Object.keys(props.data["files"])[0]}</h2>
            <section className={styles.badges}>
                {Object.keys(props.data.files).map((f: any, index) => {
                    let lang = props.data.files[f].language
                    if(lang == null)
                        return null
                    return <Badge key={"item" + index} language={lang}/>})}
            </section>
        </li>
    );
}

