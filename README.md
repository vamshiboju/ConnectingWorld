# Connecting World

Connecting World is a full-stack web application designed to map social connections using graph data structures, where each node represents a user and each edge represents a relationship. This project serves as a platform to visualize and interact with social networks, allowing users to explore connections dynamically and intuitively.

## 🌐 Live @ https://connectingworld-fe.onrender.com




## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Functionality](#functionality)
- [Getting Started](#getting-started)


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
- **Other Libraries**: JWT for authentication, bcrypt for password hashing

## Functionality 

The Connecting World application includes a variety of features to enhance user interaction and social network visualization:

### 1. User Management
   - **Sign Up & Login**: Users can create accounts and log in with secure authentication.
   - **Profile Management**: Update and manage personal details within user profiles.
   - **Authorization**: Secure access using JWT tokens to ensure data privacy.

### 2. Social Graph Visualization
   - **Dynamic Graphs**: Visualizes each user as a node and their relationships as edges in a social graph.
   - **Interactive Network**: Enables users to zoom, drag, and interact with the graph to explore connections more intuitively.

### 3. Relationship Mapping
   - **Connection Creation**: Users can add friends or create connections with other registered users.
   - **View Connections**: See direct and indirect relationships in a visual format.
   - **Connection Levels**: Organizes relationships based on user-specified levels (e.g., friend, family, colleague).

### 4. Real-Time Updates
   - **Live Refresh**: Graph updates in real time as new connections are created or removed.
   - **Socket.io Integration** (if implemented): For real-time notifications and instant graph updates, enhancing the user experience.

### 5. Search and Filter
   - **User Search**: Enables searching for specific users within the network.
   - **Connection Filtering**: Allows filtering connections based on relationship types or connection levels.
   - **Quick Access**: Search results show potential connections instantly for seamless navigation.

### 6. Data Privacy & Security
   - **JWT Authentication**: Ensures secure access to user data with token-based authorization.
   - **Password Hashing**: Uses bcrypt for secure password storage, protecting user data against unauthorized access.

### 7. Bookmark and Rate
   - **Favorite Connections**: Bookmark important connections or relationships.
   - **Rating System**: Allows users to rate or endorse connections, showcasing levels of interaction or familiarity.

### 8. Notifications
   - **Connection Requests**: Notifies users of friend requests or connection invitations.
   - **Graph Updates**: Provides instant feedback on changes in the network, ensuring users are aware of new connections.

### 9. User Feedback & Help
   - **Report Issue**: Users can report issues or problems encountered within the application.
   - **User Guide**: A simple help section to explain features and navigation for a better user experience.

With these functionalities, *Connecting World* offers users a comprehensive platform to explore, connect, and manage their social relationships dynamically.



## Getting Started

### Clone the repository:
```bash
git clone https://github.com/vamshiBoju/ConnectingWorld.git
```

## Install dependencies:

### Install backend dependencies:
```bash
cd back-end
npm install
```
### Install frontend dependencies:
```bash
cd ../front-end
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
cd ../back-end
npm start
```

### Start the Frontend server:
```bash
cd ../front-end
npm start
```
## Open the application:
### Go to http://localhost:3000 in your browser to start exploring connections!





















