import axios from "axios";

export default {
  search: () => axios.get("https://randomuser.me/api/?results=50&seed=foobar")
};