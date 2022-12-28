import styles from "../styles/search.module.scss"

export default function Search(props: any) {
  return (
    <input className={styles.search} type="text" placeholder="Enter Username..." onInput={props.onInput} />
  );
}

