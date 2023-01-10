# MVC-Blog

## Description

In this Project I created the back end and front end for a MVC-Blog site. Which uses MySQL, Express.js, Sequelize and handlebars.js in order to allow users to preform the right set up by the server.

Heroku deployed app:
(https://desolate-oasis-10594.herokuapp.com/)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Terminal Video](#terminal)
- [Video](#video)
- [Features](#Features)

## Installation

To Install:

Install node.js lts

Clone the repository from GitHub (https://github.com/chickengong/MVC-Blog).

Run command lines and install below:

```
npm init -y
npm install
```

Additional installations (sequalize, mysql2, and dotenv)

```
npm i sequalize
npm i mysql2
npm i dotenv
npm i bcrypt
npm i connect-session-sequelize
npm i express
npm i express-handlebars
npm i express-session
```

Please Run "SOURCE db/schema.sql;" 1 time in your terminal

```
mysql -u root -p
-SOURCE db/schema.sql;
```

Please change ".env.EXAMPLE" to ".env" and provide personal DB_PASSWORD, DB_NAME, DB_USER and DB_SESS.

## Usage

In your terminal (Repository/ root directory) and run the command below:

```
npm seed
```

Then

```
npm start
```

Direct your browser to "http://localhost:3002/"

## Terminal Video 

Terminal demonstration [here] (https://vimeo.com/787767998/a23c3c988f)

## Video 

Watch this short video demonstration [here]


## Features

Features you will find in this app include:

- The previous posted and when it was created.
- User can signup or login , logout when needed and create any comments they would like. 
- Can make a post and delete it if you are the author. 

