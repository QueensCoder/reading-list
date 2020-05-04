## Overview

    Demo of React Context API, React Hooks and using Store and reducer
    Client can be deployed to heroku solo,
    Server is underconstruction

## Client

From root dir cd client

In the client directory, you can run:

npm start

npm test

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `Testing Suite`

\*\*\* Has issue with Mac OS Catalina, npm test works on Linux and older mac OS
npm test will work with docker container see run app.

    Using React Testing library

    Allows us to test what is on the dom as opposed to what is inside of the store.
    See docs:

    https://testing-library.com/docs/react-testing-library/intro

    see client tests in client/src/tests

    see .travis.yml for CI/CD configuration
    before install a dev version of app is spun up and each test suite is run
    see before install and script in travis

### Run app

    in root dir to start whole app:

        docker-compose up --build

    client is found on local host 3000

    server is on port 4000

### Use app

    enter book title and author into list
    when book is completed click on book to remove from list

    app uses react-testing library to ensure the dom is updated properly for each user iteraction

    uses react-hooks and context api intead of redux for state management

### Deploy to Heroku

    Use heroku authorizations:create for production apps
    use heroku auth:token for development.

    any pull request that merges a branch to master will initiate travis to perform
    tests before deploying to heroku

### Todos

    redo front end using typescript, move from function components to class component
    container deploy to heroku needs to be re configured see heroku.yml
    need testing suite for api, db
    include nginx for routing
    add redis
    add db folder in root dir - use MLab or Mongo for to have data persist

        db may require its own container in development
