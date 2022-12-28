import styles from "../styles/table.module.scss"

export default function Table(props: any) {
  return (
    <div className={styles.content}>
        <h2 className={styles.subtitle}>{props.query}</h2>
    </div>
  );
}

