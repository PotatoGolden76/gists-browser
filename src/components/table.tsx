import { useEffect, useState } from "react";
import styles from "../styles/table.module.scss"
import Item from "./item";

export default function Table(props: any) {
    //Gists request parameters
    const base_url = "https://api.github.com/"
    const headers = new Headers()
    headers.append('Accept', 'application/vnd.github+json')
    if (process.env.REACT_APP_CLIENT_TOKEN)
        headers.append('Authorization', "Bearer " + process.env.REACT_APP_CLIENT_TOKEN)

    //Fetch gists data
    const [error, setError] = useState("")
    const [data, setData] = useState(new Array())
    useEffect(() => {
        //Ensure no fetch on empty query
        if (props.query === "")
            return
        fetch(base_url + "users/" + props.query + "/gists", {
            method: "GET",
            headers: headers
        }).then((response) => {
            if (response.ok) {
                return response.json()
            }
            throw new Error(response.status.toString())
        }).then((temp_data) => {
            setError("")
            setData(temp_data)
        })
            .catch((error) => {
                //Reset data on erro (Not Found)
                setError(error.toString())
                setData(new Array())
            })
    }, [props.query])

    return (
        <div className={styles.content}>
            <h2 className={styles.subtitle}>Results: </h2>
            {/* Data will only be empty if there are no gists or the user does not exist */}
            {data.length == 0 ? <h2 className={styles.subtitle}>{"No gists found :("}</h2> : null}
            <ul>
                {data.map((d, index) => {
                    
                    return <Item data={d} key={index} openEditor={props.openEditor}/>
                })}
            </ul>
        </div>
    );
}

