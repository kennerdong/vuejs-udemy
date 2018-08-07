import axios from "axios";

const instance = axios.create({
  baseURL: "https://vuejs-udemy-course-8712f.firebaseio.com"
});

instance.defaults.headers.common["SOMETHING"] = "something";

export default instance;
