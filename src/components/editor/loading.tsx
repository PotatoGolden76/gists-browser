import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/editor/loading.module.scss"

export default function Loading() {

    return (
        <div className={styles.container}>
            <span className={styles.spinner}><FontAwesomeIcon icon={faGithub} /></span>
            <span>Loading</span>
        </div>
    );
}

