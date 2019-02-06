# socialmindrCMS-backend

### Collaborators

[Ryan Sickle](https://github.com/oephi)

[Steven Vi](https://github.com/estvii)

[Allan Gao](https://github.com/e3cd)

### [Website Link](http://myspamtool.com.s3-website-ap-southeast-2.amazonaws.com/)

### Github Repository

[Link to Github Repository](https://github.com/oephi/socialmindrCMS-backend) - used to generate dummy data for front end React application.

As per the request from the client, access to the Frontend repository is has been made strictly limited to the contributors of the project, SocialMindr developers and Garret Blankenship (Lead Instructor of Coder Academy)

### Problem definition / Purpose

This repository comprises of the backend/database portion of a Full-stack web application built and deployed for a real world client as part of the final assessment for the Coder Academy Bootcamp. Our client is [SocialMindr](https://socialmindr.com/), a Sydney based startup specialising in social media automation   

Our goal was to build a dashboard/crm for the internal management of clients in the form of a Web Application. The dashboard will allow for SocialMindr to internally monitor clients lead automation activity.  

### Functionality/Features

The features of the SocialMindr dashboard include:
  
* The creation of authenticated clients accessed by SocialMindr authenticated accounts only
* The ability for SocialMindr to access and monitor internal client statuses and change credentials
* Allow for client verification through a a valid pin code generation and submission
* Visualise accumulated client automation statistics through a graph  
* Optimise client lead automation through a filter form
* A page which renders a log of server reports and a message form to document server reports

### Screenshots

[Login Page](docs/SocialMindr-login-page.png)

[Client Status](docs/SocialMindr-Client-status.png)

[Client Verification](docs/SocialMindr-Client-verification.png)

[Server Logs](docs/SocialMindr-Server-logs.png)

[Statistics](docs/SocialMindr-Statistics.png)

[Client List](docs/SocialMindr-client-list.png)

[Filters Page](docs/Socialmindr-Filters-page.png)


### Tech stack

* HTML
* CSS
* JavaScript
* Express
* MongoDB/Mongoose
* React.js
* Node.js
* Redux
* Heroku (Frontend deployment)
* AWS (Backend deployment
* Material-ui 
* Semantic-ui


### Using the App

If you would like to make changes to the code for the backend, you can fork the repo or on your terminal, or navigate to a directory where you would like to save the app directory. To do this run the command line
```
git clone https://github.com/oephi/socialmindrCMS-backend

```
Navigate to the directory with the following command ``` cd socialmindrCMS-backend ```and run the following command to install the necessary npm packages in each directory
```
npm install
```
Create a new database by running
```
mongod --config /usr/local/etc/mongod.conf
```
For a better database visualisation it is recommended to use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

Lastly, run  ``` npm start ``` to run the express server on your local machine at localhost:3000. 




