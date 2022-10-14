# react-node-mongo

Full stack web app using React, Node.js, and MongoDB

## Tech Stack

- NodeJS
  - Javascript runtime used to execute code outside of the browser
- ExpressJS
  - Library that runs in the Node runtime
  - Has helpers to make dealing with HTTP traffic easier
- PassportJS
  - Libarary Components
    - passport: General helpers for handling auth in Express apps
    - passport strategy: Helpers for authenticating with one very specific method
      - email/password, Google, Facebook, etc

## Setup

### Backend

- npm init
- npm install express --save
- npm install dotenv --save
- npm install passport@0.5 --save
  - currently a bug with latest release
- npm install passport-google-oauth20 --save
- npm install nodemon --save
- npm install mongoose --save
- npm install cookie-session --save
  - with cookie-session, we're storing everything in the cookie
  - use express-session if there is more than 4kb of data that needs to be stored in the session
    - express-session only holds a session id that would be used to pull the rest of the info from a data store we set up
- npm install concurrently --save

### Heroku

- Heroku may use an older version of node that will break the app
- To set the node and npm version for Heroku to use, we add the "engines" section to the package.json in the server directory
- We update the "scripts" section in package.json to tell Heroku how to start the app
- Download the Heroku CLI and create an app: heroku create
- Add heroku git link: git remote add heroku https://git.heroku.com/blah.git
- Push changes: git push heroku main

### Environment Variables

example.env files have been added to show which environment variables need to be set for the application
