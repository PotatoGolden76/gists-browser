import styles from "../styles/search.module.scss"
import { debounce } from "lodash"

export default function Search(props: any) {

  //Debounce input to ensure we don't get rate-limited
  const debouncedInput = debounce((e) => {
    props.onInput(e)
  }, 500)

  return (
    <input className={styles.search} type="text" placeholder="Enter Username..." onInput={debouncedInput} />
  );
}

