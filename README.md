# Connecting World

## Explore Social Connections, Visualize Relationships, and Manage Your Profile
# 🌐 Live @ https://connectingworld-fe.onrender.com/


## The code and media present in this repository remains an intellectual property of Okereke Chinweotito and therefore cannot be copied, modified, redistributed, sublicenced or used as a template without due permission from the author

## Introduction

Connecting World is a full-stack web application designed to map social connections using graph data structures, where each node represents a user and each edge represents a relationship. The platform allows users to visualize and interact with their social networks in real time, making connections more dynamic and engaging.


## Getting Started 💻

Clone the Repo in your machine and install all the dependencies.

### Prerequisites 🔍

Make sure that you have NodeJS in your machine. If not, go to [nodejs.org](https://nodejs.org) and install npm. Then check for your version using the command line.

```
   node -v
```

### Installing 📕

After cloning the repo, open the folder with you current code editor and install all the dependencies.

```
    npm install
```

After all the dependencies get installed, you need to create an .env file at the root of the project and paste the following:

> THIS IS THE IMPORTANT BIT! You need to get your own api key from the movieDb website to run the application.

- You need to register an account and get an API key.
- After getting your API Key, paste the api key in the .env file.

```
REACT_APP_KEY = GET YOUR KEY AT THE MOVIEDB WEBSITE
REACT_APP_API = https://api.themoviedb.org/3/
```

With the .env file created with an API key. Just run the npm command to start the application.

```
    npm run start
```

Go to localhost:3000 to see the web application.

## Deployment 🌍

MovieZone is deployed using [Render](https://render.com/).

## Built With 🔨

- [ReactJS](https://reactjs.org) - The web framework used
- [Context API](https://reactjs.org) - responsible for global state management
- [SWR](https://swr.vercel.app/) - responsible for data fetching with [Axios](https://github.com/axios/axios)
- [Styled Components](https://styled-components.com/) - responsible for design and styling the web application
- [Framer Motion](https://www.framer.com/api) - Used in the animations

