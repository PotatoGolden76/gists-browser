import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styles from "../styles/editor/editor.module.scss"
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Tabs from "./editor/tabs";
import Loading from "./editor/loading";

export default function Editor(props: any) {
    //Open file data
    const [active, setActive] = useState(Object.keys(props.files)[0])
    const [code, setCode] = useState("")
    const [isLoading, setLoading] = useState(false)

    const getLanguage = () => {
        if (props.files[active]["language"] === null)
            return "text"
        return props.files[active]["language"].trim().toLowerCase()
    }

    //Code request for active file
    const headers = new Headers()
    useEffect(() => {
        setLoading(true)
        fetch(props.files[active]["raw_url"], {
            method: "GET",
            headers: headers
        })
            .then((response) => response.text())
            .then((data) => {
                setCode(data)
                setLoading(false)
            })
    }, [active])
    return (
        <div className={styles.wrapper}>
            <nav className={styles.tabGroup} key="tab-group-key">
                <Tabs key="tab-key" files={Object.keys(props.files)} active={active} setActive={setActive} />
                <button onClick={props.onClose}><FontAwesomeIcon icon={faX} /></button>
            </nav>
            {/* Render Spinner if code is not done fetching */}
            {isLoading ? <Loading /> :
                <SyntaxHighlighter key={"editor-key"} showLineNumbers wrapLongLines language={getLanguage()} style={atomOneDark}>
                    {code}
                </SyntaxHighlighter>}
        </div>
    );
}

