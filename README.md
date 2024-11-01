MovieZone
Search for Movies and TV Shows. Bookmark and Rate your favorite shows. Watch exciting trailers
🌐 Live @ https://movie.okereke.dev/
Copyright (c) 2021 Okereke Chinweotito
The code and media present in this repository remains an intellectual property of Okereke Chinweotito and therefore cannot be copied, modified, redistributed, sublicenced or used as a template without due permission from the author
Introduction
MovieZone is an web application that allows the user to browse for movies , tv shows and actor profiles. They can also login and rate media or save it to their profile. This was made possible with React JS and the MovieDB API.

Getting Started 💻
Clone the Repo in your machine and install all the dependencies.

Prerequisites 🔍
Make sure that you have NodeJS in your machine. If not, go to nodejs.org and install npm. Then check for your version using the command line.

   node -v
Installing 📕
After cloning the repo, open the folder with you current code editor and install all the dependencies.

    npm install
After all the dependencies get installed, you need to create an .env file at the root of the project and paste the following:

THIS IS THE IMPORTANT BIT! You need to get your own api key from the movieDb website to run the application.

You need to register an account and get an API key.
After getting your API Key, paste the api key in the .env file.
REACT_APP_KEY = GET YOUR KEY AT THE MOVIEDB WEBSITE
REACT_APP_API = https://api.themoviedb.org/3/
With the .env file created with an API key. Just run the npm command to start the application.

    npm run start
Go to localhost:3000 to see the web application.

Deployment 🌍
MovieZone is deployed using Netlify.

Built With 🔨
ReactJS - The web framework used
Context API - responsible for global state management
SWR - responsible for data fetching with Axios
Styled Components - responsible for design and styling the web application
Framer Motion - Used in the animations
MovieDB - the API used for the project
License 📇
This project is licensed under the MIT License - see the LICENSE.md file for details
