import axios from "axios";

const $host = axios.create({
    baseURL: 'http://localhost:4040/'
})

export {
    $host
}