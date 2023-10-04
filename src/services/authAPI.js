import axios from "axios";
import {
    setDataToLocalStorage,
    getDataFromLocalStorage
} from "./localStorage";


axios.defaults.baseURL = "https://dev-backend-b4vo.onrender.com";
axios.defaults.headers.common["Authorization"] = `Bearer ${getDataFromLocalStorage("token")}`;


/*
 * POST @ /api/auth/register
 * body: { name, email, password }
 */
export const register = async (values) => {
    try {
        const response = await axios.post(
            `/api/auth/register`,
            values
        );

        if (response.status === 201) {
            return response.data.Data;
        }
    } catch(error) {
        console.log(error.message);
    }
}

/*
 * POST @ /api/auth/login
 * body: { email, password }
 */
export const login = async (values) => {
    try {
        const response = await axios.post(
            `/api/auth/login`,
            values
        );
        
        if (response.status === 200) {
            const token = response.data.Data;
            setDataToLocalStorage('token', token)
            return token;
        }
    } catch(error) {
        console.log(error.message);
    }
}


/*
 * GET @ /protected/userinfo
 * headers: Authorization: Bearer token
 */
export const refreshUser = async () => {
    const writtenToken = getDataFromLocalStorage("token");

    if (typeof writtenToken === "string") {
        try {
            const response = await axios.get(
                `/protected/userinfo`
            );

            return response.data.Data;

        } catch(error) {
            console.log(error.message);
        }
    }
}