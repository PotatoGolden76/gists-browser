import { useEffect, useRef, useState } from 'react';
import LoginGithub from 'react-login-github';
import './App.css';
import Homepage from './pages/homepage';
import styles from './styles/login.module.scss'

function App() {

  //TODO: figure out login maybe

  // const [code, setCode] = useState("");
  // const [token, setToken] = useState("");
  // const isMounted = useRef(false);


  // const headers = new Headers()
  // headers.append("Accept", "application/json")
  // headers.append("mode", "cors")

  // useEffect(() => {
  //   if (!isMounted.current) {
  //     isMounted.current = true
  //     return
  //   }
  //   fetch("https://github.com/login/oauth/access_token", {

  //     method: "POST",
  //     headers: headers
  //   }).then((response) => {
  //     if (response.ok) {
  //       return response.json()
  //     }

  //     throw new Error(response.status.toString())
  //   }).then((temp_data) => {
  //     setToken(temp_data["access_token"])
  //   })
  //     .catch((error) => {

  //     })
  // }, [code])

  return (
    // <>
    //   {token !== "" ? <Homepage token={token} /> :
    //     <div className={styles.container}>
    //       <h1 className={styles.title}>Log in with GitHub</h1>
    //       <LoginGithub className={styles.login}
    //         clientId={process.env.REACT_APP_CLIENT_ID}
    //         onSuccess={(response: any) => { setCode(response["code"]) }}
    //         onFailure={(response: any) => { console.error(response) }}
    //         redirectUri={process.env.REACT_APP_REDIRECT}
    //       />
    //     </div>
    //   }
    // </>
    <Homepage />
  );
}

export default App;
