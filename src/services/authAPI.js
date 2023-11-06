import axios from 'axios';
import {
    getDataFromLocalStorage
} from './localStorage';
import { STATUS_CODES } from '../shared';


axios.defaults.baseURL = 'https://dev-backend-b4vo.onrender.com';


/*
 * POST @ /api/auth/register
 * body: { name, email, password }
 */
export const fetchRegister = async (values) => {
    try {
        const response = await axios.post(
            `/api/auth/register`,
            values
        );

        if (response.status === STATUS_CODES.created) {
            return response.data.data;
        }
    } catch(error) {
        if (error.response.status === STATUS_CODES.unauthorized) {
            throw error;
        }
    }
}

/*
 * POST @ /api/auth/login
 * body: { email, password }
 */
export const fetchLogin = async (values) => {
    try {
        const response = await axios.post(
            `/api/auth/login`,
            values
        );

        if (response.status === STATUS_CODES.success) {
            return response.data.data;
        }
    } catch (error) {
        if (error.response.status === STATUS_CODES.unauthorized) {
            throw error;
        }
    }
}


/*
 * GET @ /protected/userinfo
 * headers: Authorization: Bearer token
 */
export const fetchRefresh = async () => {
    const token = getDataFromLocalStorage('auth').state.token;

    try {
        const response = await axios.get(
            `/protected/userinfo`,
            { headers: { 'Authorization': token } }
        );
        return response.data.data;
    } catch (error) {
        const faildStatus = error.response.data.status;
        return faildStatus;
    }
}


/*
 * POST @ /api/auth/password-reset
 * body: { email }
 */
export const fetchResetPassword = async (values) => {
    try {
        const response = await axios.post(
            `/api/auth/password-reset`,
            values
        );

        return response.data.data;
    } catch (error) {
        console.log(error.message);
    }
}


/*
 * PATCH @ /protected/user-patch
 * headers: Authorization: Bearer token
 */
export const fetchUpdateUserData = async (updateData, currentPassword) => {
    const token = getDataFromLocalStorage('auth').state.token;

    try {
        const response = await axios.patch(
            `/protected/user-patch`,
            updateData,
            { headers: { 'Authorization': `${token}:${currentPassword}` } }
        );

        return response.data.data;
    } catch (error) {
        console.log(error.message);
    }
}
