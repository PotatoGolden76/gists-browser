import { useState } from 'react';
import './App.css';
import Search from './components/search';
import Table from './components/table';
import styles from './styles/homepage.module.scss'

function App() {

  const [query, setQuery] = useState("")

  const search = (e: any) => {
    setQuery(e.target.value)
  }

  const hasQuery = () => {
    return query.trim().length !== 0
  }

  return (
    <div className={styles.container} style={hasQuery() ? {top: 0} : {top: "50vh", transform: "translateY(-50%)"}}>
      <h1 className={styles.cta} style={hasQuery() ? {fontSize: 0, color: "transparent"} : {}}>Gists Browser</h1>
      <Search onInput={(e: any) => {search(e)}} />

      {hasQuery() ?  <Table query={query} /> : null}
    </div>
  );
}

export default App;
