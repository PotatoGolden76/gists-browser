import { useEffect, useState } from "react";
import styles from "../styles/table.module.scss"
import Item from "./item";

export default function Table(props: any) {
    const base_url = "https://api.github.com/"
    const headers = new Headers()
    headers.append('Accept', 'application/vnd.github+json')
    if (process.env.REACT_APP_CLIENT_TOKEN)
        headers.append('Authorization', "Bearer " + process.env.REACT_APP_CLIENT_TOKEN)

    const [error, setError] = useState("")
    const [data, setData] = useState(new Array())
    useEffect(() => {
        if (props.query === "")
            return
        fetch(base_url + "users/" + props.query + "/gists", {
            method: "GET",
            headers: headers
        }).then((response) => {
            if (response.ok) {
                return response.json()
            }
            //TODO: fix error handling
            throw new Error(response.status.toString())
        }).then((temp_data) => {
            setError("")
            let t = new Array()
            temp_data.forEach((i: any) => { t.push(i) })
            setData(t)
        })
            .catch((error) => {
                setError(error.toString())
            })
    }, [props.query])

    return (
        <div className={styles.content}>
            <h2 className={styles.subtitle}>Results: </h2>
            {error !== "" ? <h2 className={styles.subtitle}>{error}</h2> : null}
            <ul>
                {data.map((d, index) => {
                    
                    return <Item data={d} key={index}/>
                })}
            </ul>
        </div>
    );
}

