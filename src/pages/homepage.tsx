import { useState } from 'react';
import Editor from '../components/editor';
import Search from '../components/search';
import Table from '../components/table';
import styles from '../styles/homepage.module.scss'

export default function Homepage(props: any) {

    const [query, setQuery] = useState("")
    const [files, setFiles] = useState(new Array())
    const [isEditorOpen, setEditorOpen] = useState(false)

    const hasQuery = () => {
        return query.trim().length !== 0
    }

    const handle = (e: any) => {
        setQuery("")
        setQuery(e.target.value)
    }

    const openEditor = (files: Array<any>) => {
        setFiles(files)
        setEditorOpen(true)
        document.body.style.overflow = 'hidden'
    }

    const closeEditor = () => {
        setFiles(new Array())
        setEditorOpen(false)
        document.body.style.overflow = 'unset'
    }

    return (
        <div className={styles.container} style={hasQuery() ? { top: 0 } : { top: "50vh", transform: "translateY(-50%)" }}>
            <h1 className={styles.cta} style={hasQuery() ? { fontSize: 0, color: "transparent" } : {}}>Gists Browser</h1>
            <Search onInput={handle} />

            {hasQuery() ? <Table openEditor={openEditor} token={props.token} query={query.trim()} /> : null}
        
            {isEditorOpen ? <Editor files={files} onClose={closeEditor}/> : null}
        </div>
    );
}
