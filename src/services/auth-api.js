import axios from "axios";

axios.defaults.baseURL = "https://dev-backend-b4vo.onrender.com/api";

export const register = async (values) => {
    try {
        const response = await axios.post(
            `/auth/register`,
            values
        );

        if (response.status === 201) {
            return response.data.data;
        }
    } catch(error) {
        console.log(error.message);
    }
}