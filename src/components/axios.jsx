 import axios from "axios"

 const instance = axios.create({
   baseURL: "https://bdcoetask2.vercel.app/api/v1/users/search",
 });

 export default instance;