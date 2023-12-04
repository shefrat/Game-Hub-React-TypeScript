import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '821d26c34bb44ca6b03964d2eb515fe1'
    }
});