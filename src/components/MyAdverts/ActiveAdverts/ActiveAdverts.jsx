import { useEffect, useState } from "react";
import { fetchMyAdverts } from "../../../services";
import CoursesList from '../../CoursesGallery/CoursesList/CoursesList';


const ActiveAdverts = () => {
    const [ adverts, setAdverts ] = useState([]);

    useEffect(() => {
        getMyAdverts();
    }, []);

    async function getMyAdverts() {
        try {
            const response = await fetchMyAdverts();
            setAdverts(response);
        } catch (error) {
            console.log(error.message);
        }
    }

    

    return (
        <CoursesList adverts={adverts} />
    );
};


export default ActiveAdverts;