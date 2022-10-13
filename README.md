# react-node-mongo

Full stack web app using React, Node.js, and MongoDB

## Tech Stack

- Node
  - Javascript runtime used to execute code outside of the browser
- Express
  - Library that runs in the Node runtime
  - Has helpers to make dealing with HTTP traffic easier

## Setup

### Backend

- npm init
- npm install express --save
- npm install dotenv --save

### Heroku

- Heroku may use an older version of node that will break the app
- To set the node and npm version for Heroku to use, we add the "engines" section to the package.json in the server directory
- We update the "scripts" section in package.json to tell Heroku how to start the app

### Environment Variables

example.env files have been added to show which environment variables need to be set for the application
