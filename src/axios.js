import axios from "axios";

//instance
const instance = axios.create({
  baseURL: "https://memes-project.herokuapp.com/",
});

export default instance;
