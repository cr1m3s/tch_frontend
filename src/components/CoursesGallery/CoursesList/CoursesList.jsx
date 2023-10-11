import { CourseCard } from '../CourseCard';
import courses from '../../../courses.json';
import { List } from './CoursesList.styled';


const CoursesList = () => {
    console.log(courses);
    return (
        <List>
            {
                courses.map(({
                    id,
                    title,
                    author,
                    experience,
                    duration,
                    price,
                    lessonFormat,
                    category,
                    subcategory,
                    lessonLenguage,
                    content,
                    avatar
                }) =>
                <CourseCard
                    key={id}
                    title={title}
                    author={author}
                    experience={experience}
                    duration={duration}
                    price={price}
                    lessonFormat={lessonFormat}
                    category={category}
                    subcategory={subcategory}
                    lessonLenguage={lessonLenguage}
                    content={content}
                    avatar={avatar}                
                />
            )
            }
            
        </List>
    );
};

export default CoursesList;