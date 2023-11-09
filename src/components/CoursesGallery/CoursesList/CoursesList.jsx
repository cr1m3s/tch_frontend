import PropTypes from 'prop-types';
import { CourseCard } from '../CourseCard';
import courses from '../../../courses.json';
import { List } from './CoursesList.styled';


const CoursesList = ({isVisible}) => {
    return (
        <List $isVisible={isVisible}>
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
                    advertId={id}
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


CoursesList.propTypes = {
    isVisible: PropTypes.bool,
}


export default CoursesList;