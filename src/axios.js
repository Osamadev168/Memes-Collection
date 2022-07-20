import axios from "axios";

//instance
const instance = axios.create({
  baseURL: "http://localhost:5000",
});

export default instance;
