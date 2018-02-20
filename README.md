# Netmix Application
This is the Netmix application for the Audiostaq interview.

## The Problem
I was tasked to create an application 'Netmix' that displays movies and lets you view trailers. The problem asked for authentication of users, as well as movie display, rating of movies, and adding movies to the database. I should use a modern framework, proper design and layout of the app, and I can optionally write unit tests.

## The Solution
I used create-react-app to bootstrap an application, and then proceeded to add additional libraries such as redux, react-router, tailwindcss, redux-saga, json-server, and enzyme. I started by creating the Movie Show and Index views with hardcoded data before utilizing json-server as a quick start api server.

Because the scope of the project seemed quite large, I decided not to implement certain features such as search, authentication, creation of movies, and rating of movies. However I did add "infinite scrolling" to the movie index page. I felt like this was a reasonable amount of the work to complete. Additional samples of my work _with_ authentication, creation, and modification of resources is available on request.

I added Enzyme on top of Jest to make testing the Components easier, and I wrote tests for some of the partials I created: namely the Header, MoviesLayout, and RatingDisplay.

## Running the app
Clone the repo, enter the directory, and then run `npm install`. After that completes, you will need to terminal tabs open. In one run `npm run server` (to start the dev api server) and in the other run `npm start` (to start the webpack dev server). Visit http://localhost:8080 in order to see the running app.

To run tests, after installing dependencies run `npm test`.
