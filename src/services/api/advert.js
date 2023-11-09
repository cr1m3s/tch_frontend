import axios from 'axios';
import { TOKEN } from '../../shared';


/*
 * POST @ /protected/advertisement-create
 * headers: Authorization: token
 * body: { data }
 */
export const fetchCreateAdvert = async (data) => {
    try {
        const response = await axios.post(
            `/protected/advertisement-create`,
            data,
            { headers: {'Authorization': TOKEN} }
        );

        return response;
    } catch (error) {
        console.log(error.message);
    }
}

/*
 * DELETE @ /protected/advertisement-delete
 * headers: Authorization: token
 * body: { id }
 */
export const fetchDeleteAdvert = async (id) => {
    try {
        const response = await axios.delete(
            `/protected/advertisement-delete`,
            id,
            { headers: {'Authorization': TOKEN} }
        );

        return response;
    } catch (error) {
        console.log(error.message);
    }
}

/*
 * PATCH @ /protected/advertisement-patch
 * headers: Authorization: token
 * body: { data }
 */
export const fetchUpdateAdvert = async (data) => {
    try {
        const response = await axios.patch(
            `/protected/advertisement-patch`,
            data,
            { headers: {'Authorization': TOKEN} }
        );

        return response;
    } catch (error) {
        console.log(error.message);
    }
}