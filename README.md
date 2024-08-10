⚠️ THIS PROJECT IS PLANNED FOR A REWRITE ⚠️

# Github Gists Browser

Browse the public gists of any Github users with this SPA built using React.js, Typescript and Sass.

## Features:
+ Search public gists
+ See the programming languages used in a Gist
+ See the number of Forks, Commits and Comments
+ Check out who forked the Gist recently
+ See the files of a Gist
+ Read the files using a built-in editor with tabs and syntax highlighting
+ Jump straight to a Gist's page

## Usage:

+ The app is available on [Github Pages](https://potatogolden76.github.io/gists-browser)

    ⚠ WARNING: the app in its current state does not use an authentication method, thus using the app from Github Pages will result in being rate-limited at 60 requests/hour, as per Github Policy ⚠

+ Building from source:
    
    The app is built using create-react-app, so the setup is as easy as doing:
    ```
    git clone https://github.com/PotatoGolden76/gists-browser.git

    cd gists-browser
    npm install
    npm start
    ```

    You can get around the rate limitation by running the app locally and adding a personal access token in `.env` at `REACT_APP_CLIENT_TOKEN`

## Future plans:
+ Implement authentication
+ Add a way to see comments
+ Add a way to see commits
+ Add a way to see forks
+ Find a way to fetch large files more efficiently 
