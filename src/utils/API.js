import axios from "axios";

//axios lets us make an ajax call to the random user api
export default {
  search: () => axios.get("https://randomuser.me/api/?results=50&seed=foobar")
};