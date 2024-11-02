# Connecting World

Connecting World is a full-stack web application designed to map social connections using graph data structures, where each node represents a user and each edge represents a relationship. This project serves as a platform to visualize and interact with social networks, allowing users to explore connections dynamically and intuitively.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- **User Management**: Sign up, login, and manage user profiles.
- **Social Graph Visualization**: Uses graph data structures to represent and visualize social connections.
- **Relationship Mapping**: Create, view, and interact with connections between users.
- **Real-Time Updates**: Social connections update dynamically with changes in relationships.
- **Search and Filter**: Search for specific users and filter connections based on relationship types or levels.

## Technologies Used
- **Frontend**: React, JavaScript, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Other Libraries**: D3.js (for graph visualization), JWT for authentication, bcrypt for password hashing

## Getting Started

### Clone the repository:
```bash
git clone https://github.com/your-username/connecting-world.git
cd connecting-world
```

## Install dependencies:

### Install backend dependencies:
```bash
cd server
npm install
```
### Install frontend dependencies:
```bash
cd ../client
npm install
```
## Environment Variables:
### Create a .env file in the server folder with your environment variables:
``` plaintext
MONGO_URI=<your-mongo-db-connection-string>
JWT_SECRET=<your-jwt-secret-key>
```
## Run the application:

### Start the backend server:
```bash
cd ../server
npm start
```

### Start the Frontend server:
```bash
cd ../client
npm start
```
## Open the application:
### Go to http://localhost:3000 in your browser to start exploring connections!

















