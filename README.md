<div>
  <h1 align="center">Awesome Movie Database (AMDB) 🎬</h1>
   <p>
    A Movie database web application that provides information related to
    films and television shows, including cast, production crew, movie ratings, sinopse etc...
    <strong>
      All the data in this app is provided by <a href="https://www.themoviedb.org/">The Movie Database(TMDB)</a> API's.
    </strong>
  </p>
</div>

<hr />

# System Requirements
* git >= 2.25.1
* npm >= 8.5.5
* node >= 16.15.0

Made sure to have the correct versions installed.
```shell
git --version
node --version
npm --version
```

# Running the app
1. Using `yarn` install all dependencies.
```bash
  yarn install
```

2. before run the project locally, add a `.env` file to the root of the project.
```dosini
VITE_APP_TMDB_BASE_URL=https://api.themoviedb.org
VITE_APP_TMDB_API_KEY=your_own_generated_api_key
```

3. Run the project in locally on development mode.
```bash
  yarn dev
```

# Running the tests
Run tests options scripts.
```bash
  yarn test # run tests only once.
  yarn test:watch # run tests in watch mode.
  yarn test:coverage # run tests for coverage.
```

# Lint and fix files
Check and fix all files.
```bash
  yarn lint
```