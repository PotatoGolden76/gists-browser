import { faFileCode, faFileLines, faCodeFork, faCodeCommit, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styles from "../styles/item/item.module.scss"
import Badge from "./item/badge";
import BadgeImage from "./item/image";

export default function Item(props: any) {
    const headers = new Headers()
    headers.append('Accept', 'application/vnd.github+json')
    if (process.env.REACT_APP_CLIENT_TOKEN)
        headers.append('Authorization', "Bearer " + process.env.REACT_APP_CLIENT_TOKEN)

    const files = Object.keys(props.data.files)
    const languages: string[] = []
    files.forEach((f) => {
        if (!languages.includes(props.data.files[f].language))
            languages.push(props.data.files[f].language)
    })

    const [commitNr, setCommitNr] = useState(0)
    const [forkNr, setForkNr] = useState(0)
    const [forks, setForks] = useState(new Array())

    useEffect(() => {
        fetch(props.data["forks_url"], {
            method: "GET",
            headers: headers
        }).then(
            (response) => response.json()
        ).then((data) => {
            setForkNr(data.length)
            setForks(data.slice(0, 3))
        })

        fetch(props.data["commits_url"], {
            method: "GET",
            headers: headers
        }).then(
            (response) => response.json()
        ).then((data) => {
            setCommitNr(data.length)
        })
    }, [props.data])

    return (
        <li className={styles.body}>
            <a  href={props.data["html_url"]} target="_blank"  className={styles.title}><FontAwesomeIcon icon={faFileCode} className={styles.titleIcon} />{(props.data["description"] != null && props.data["description"] !== "") ? props.data["description"] : Object.keys(props.data["files"])[0]}</a>
            <section className={styles.badges}>
                {languages.map((l, index) => {
                    if (l == null)
                        return null
                    return <Badge key={l + index} language={l} />
                })}
            </section>
            <section className={styles.data}>

                <div>
                    <h2 className={styles.subtitle}>Files</h2>
                    <section className={styles.files} onClick={() => {props.openEditor(props.data.files)}}>
                        {files.map((f, i) => {
                            return <span className={styles.file} key={f + i}>
                                <FontAwesomeIcon icon={faFileLines} />
                                {f}
                            </span>
                        })}
                    </section>
                </div>

                <div>
                    <div className={styles.info}>
                        <span className={styles.subtitle}>
                            <FontAwesomeIcon icon={faCodeFork} className={styles.titleIcon} />
                            {forkNr}
                        </span>

                        <span className={styles.subtitle}>
                            <FontAwesomeIcon icon={faCodeCommit} className={styles.titleIcon} />
                            {commitNr}
                        </span>

                        <span className={styles.subtitle}>
                            <FontAwesomeIcon icon={faMessage} className={styles.titleIcon} />
                            {props.data.comments}
                        </span>
                    </div>

                    {forkNr == 0 ? null :
                        <div>
                            <h2 className={styles.subtitle}>Recent forks</h2>
                            <span className={styles.forks}>
                                {forks.map((f, i) => {
                                    return <BadgeImage key={f + i} name={f.owner["login"]} src={f.owner["avatar_url"]} alt="profile pic" />
                                })}                    
                                </span>    
                        </div>}
                </div>

            </section>


        </li>
    );
}

