import Axios from "axios"
import {host} from "./host"

export const signup = (data) => {
    //console.log(data);
    return new Promise((resolve, reject) => {
        Axios.post(host+"auth/signup", data)
        .then((response) => {
            console.log(response);
            if (response.status == 200){
                return resolve(response.data);
            }
        })
        .catch((e) => {
            return reject(e.response.data.message);
        })
    })
}