# Boilerplate: create-react-app with a custom Node Server

This is a simple website boilerplate that uses a [React](https://github.com/facebook/create-react-app) frontend and a custom Node backend (server for API, proxy, & routing). This can be used as a starting point for projects, which are intended to be deployed to a hosting service such as Heroku. 

## File Layout

This boilerplate consists of a client folder, which contains the React frontend UI, and a server folder, which contains the Node backend server. The boilerplate is a combination of two npm projects, so there are two `package.json` configs and therefore two places to run `npm` commands:

  1. [**Node server**](server/): [`./package.json`](package.json)
      * contains express starter code in the [`server/app.js`](server/app.js) file
      * contains example api routing in the [`server/api/index.js`](server/api/index.js) file
  2. [**React client**](client/): [`client/package.json`](client/package.json)
      * generated by [create-react-app](https://github.com/facebook/create-react-app)
      * production build generated via `build` script in the Node server's [`./package.json`](package.json)

## Local Development

Because this app is made of two npm projects, there are two places to run `npm` commands:

1. **Node API Server** at the root `./`
2. **React Frontend UI** in `client/` directory.

### Run the Node API Server

In a terminal:

```bash
# Initial setup
npm install

# Start the server
npm start
```

#### Install new npm packages for Node

```bash
npm install package-name --save
```


### Run the React Frontend UI

The React app is configured to proxy backend requests to the local Node server. (See [`"proxy"` config](client/package.json))

In a separate terminal from the API server, start the UI:

```bash
# Always change directory, first
cd client/

# Initial setup
npm install

# Start the server
npm start
```

#### Install new npm packages for React Frontend UI

```bash
# Always change directory, first
cd client/

npm install package-name --save
```
