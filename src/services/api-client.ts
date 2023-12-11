import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '4819cbf84e1643caad00b59ac3c7ecea' // It doesn't work, get you key from https://rawg.io/
    }
});