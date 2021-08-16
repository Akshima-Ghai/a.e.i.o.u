# a.e.i.o.u

<p align="center"><img src="assets/emotion.png" width="100" height="100"></p>

### 🌟 aeiou (An Emotion Invigilator Only for You) is a web application that gamifies 💻 stress/anxiety/depression management in an actionable manner to provide peace of mind.
 
- The main focus of this web app is to not only make people aware of their emotions but also get them to take actions to take control of their emotions through a short game quiz where they can select a task which needs to be completed before the day ends.

### Features

- Users can create an account by registering their email ids;
- Users can play a small quiz game🎮 where they can accept a challenge based on their emotion and select a reward.
- After completion of the challenge, they can give themselves the reward🎉 earlier selected by them.
- Users can check their task status and event history.
- A streak🌟 will be maintained if user continues to complete at least one challenge per day.

## A sneak peek into what we have here!

- Our website is deployed at https://a-e-i-o-u.netlify.app/

### Front Page

<img src="assets/Screenshot (1159).png" width="480" height="270">

### Home Page

<img src="assets/Screenshot (1162).png" width="480" height="270">

<img src="assets/Screenshot (1163).png" width="480" height="270">

### Sign In Page

<img src="assets/Screenshot (1160).png" width="480" height="270">

### Sign Up Page

<img src="assets/Screenshot (1161).png" width="480" height="270">

### Emotion Quiz

<img src="assets/Screenshot (1164).png" width="480" height="270">

### Task Quiz

<img src="assets/Screenshot (1165).png" width="480" height="270">

### Reward Quiz

<img src="assets/Screenshot (1166).png" width="480" height="270">

### Accept Task

<img src="assets/Screenshot (1167).png" width="480" height="270">

### Home Page after adding Events

<img src="assets/Screenshot (1168).png" width="480" height="270">

<img src="assets/Screenshot (1169).png" width="480" height="270">

<img src="assets/Screenshot (1170).png" width="480" height="270">

### Reward Page

<img src="assets/Screenshot (1171).png" width="480" height="270">

## Technology Stack

- **Coding Languages**: <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> <img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>

- **Tools & Frameworks**: <img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/> <img alt="Express.js" src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/> <img alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/> <img alt="Mongoose" src ="https://img.shields.io/badge/Mongoose-%234ea94b.svg?&style=for-the-badge&logo=Mongoose&logoColor=white"/>

- **Project Management Tools**: <img alt="GitHub" src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/> <img alt="Git" src="https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"/>

<hr>

## Environment Setup for local use-

- Drop a :star: on the GitHub repository.
  <br/>

- Download [Git](https://git-scm.com/downloads) (when you install Git, Git Bash also gets installed by default)
  <br/>

- Download and install a code/ text editor. - Recommended- - [Download VS Code](https://code.visualstudio.com/download) - [Download Atom](https://atom.io/)
  <br/>

- Download [Node Js and npm(Node package manager)](https://nodejs.org/en/) (when you install Node, npm also gets installed by default)
  <br/>

- Mongo DB community editition is free and a great software in order to work with MongoDB applications. [Download Mongo DB community editition](https://docs.mongodb.com/manual/administration/install-community/)
  <br/>

- Robo 3T is a desktop graphical user interface (GUI) for Mongo DB. It can help to skip running all the Mongo DB commands manually every time we want to access the data. [Download Robo 3T](https://robomongo.org/download) **(optional)**
  <br/>

- Clone the repository by running command

```
git clone https://github.com/<your user-name>/a.e.i.o.u.git
```

in your git bash.
<br/>

- Run command `cd a.e.i.o.u`.
  <br/>

- Again, run command `cd client`.
  <br/>

- Run this command to install all dependencies for the frontend of this project.

```
npm install
```

<br/>

- Now, run command `cd server`.
  <br/>

- Run this command to install all dependencies for the backend of this project.

```
npm install
```

<br/>

- Adding secret key for JWT auth.

  - Run this command when inside the root directory to make a `.env` file.

  ```
  touch .env
  ```

  - Now add this to the `.env` file

  ```
  SECRET_KEY = your-secret-key
  URL = mongodb://localhost:27017/aeiouDB
  ```

  <br/>

- Testing : Run this command on your terminal/ bash to start the Mongo server on port 27017(default).

```
mongod
```

<br/>

- Run this command to start the project.

```
npm start
```

or

- Run this command to start the project as a developer.

```
npm run dev
```

<br/>

- Open link to view the website in your browser window if it doesn't open automatically.

```
http://localhost:3000/
```

<br/>

- Now you are all set to use this project.
