import { Link } from "react-router-dom";
import { CourseCard } from "../components/CoursesGallery/CourseCard";
import courses from '../courses.json';

const AdvertCardPage = () => {
    return (
        <>
            {
                courses.map((course) => {
                        console.log(course.id);
                    }
                )
    
            }
        </>
    );
}

export default AdvertCardPage;