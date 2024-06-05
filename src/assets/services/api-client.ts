import axios from "axios";

export default  axios.create({
    baseURL: "https://api.rawg.io/api", 
    params: {
        key: "f9ff42b368624c459800627e1793b611"
    }
})