import { useState } from 'react';
import Search from '../components/search';
import Table from '../components/table';
import styles from '../styles/homepage.module.scss'

export default function Homepage(props: any) {

    const [query, setQuery] = useState("")

    const hasQuery = () => {
        return query.trim().length !== 0
    }

    const handle = (e: any) => {
        setQuery("")
        setQuery(e.target.value)
    }

    return (
        <div className={styles.container} style={hasQuery() ? { top: 0 } : { top: "50vh", transform: "translateY(-50%)" }}>
            <h1 className={styles.cta} style={hasQuery() ? { fontSize: 0, color: "transparent" } : {}}>Gists Browser</h1>
            <Search onInput={handle} />

            {hasQuery() ? <Table token={props.token} query={query.trim()} /> : null}
        </div>
    );
}
