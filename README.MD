# Northcoders Front End News Project

This repository contains works of a Front End project to an [API backend project](https://github.com/berri-puff/news-by-jen). Created using Vite and React with Javascript, requests made to the API by Axios.

The project is now fully deployed and hosted via Netifly, for the hosted version [click here](https://nc-hot-issue.netlify.app/)

**Navigating the App:**

This app essentially recreates a News website, where users can browse articles, leave comments and like and dislike articles or comments. 
Navigate the app by clicking on titles and images will allow access to different components. So far, there is no user log-in verification by passwords, instead click on the single user image to be 'logged in'. 

_Note: Unable to retrieve all (unfilted) articles if navigation path to get selected articles is via topics -> a chosen topic_

Current API Endpoints available: 

    - /topics

    - /articles

    - /users 

    - /articles/:article_id 

    - /articles/:article_id/comments 

    - /users/:username

Further API Endpoints to be dealt with: 

    - POST /topic

    - PATCH /comments/comment_id, increase or decrease vote counts 

    - POST /articles 



**Cloning this locally:**
1. Fork this repo and run ```git clone``` with your method of choice 
2. ```code fe-nc-news``` to open up the repo locally
3. Run ```npm install i```, this will ensure all dependencies required to run this project will be installed.

***Make sure your Node version is v20.5.1 and above in order to run this project***

4. Opening a port and see the page running locally at any point, run the commend ```npm run dev``` and follow the Local URL provided in the terminal 

Components of the pages will reside in the ```components``` and ```src``` folder.
