import axios from 'axios';

export default axios.create({
<<<<<<< HEAD
    baseURL:'https://movie-app-chella.netlify.app'
=======
    baseURL:"http://localhost:8080",
    headers: {"skip-browser-warning": "true"}
>>>>>>> bdbcd653db6aa7b4c4c39f1c60985bdd9658ac15
});