import { Icon, Message, Title } from '../../common';
import PropTypes from 'prop-types'
import {
    Card,
    CardHeader,
    CardTitleWrapper,
    TitleBox,
    Avatar,
    TimeInfo,
    AboutTitle,
    CourseDetails,
    CourseDescr
} from './CourseCard.styled';


const CourseCard = ({
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
}) => {
    const isMobileScreenSize = window.matchMedia('(max-width: 768px)').matches;

    return (
        <Card>
            <CardHeader>
                <CardTitleWrapper>
                    <TitleBox>
                        <Title indent={10} size={[24, 32]} weight={600} >{title}</Title>
                        <Message>
                            <span>Provider:</span> <span>{author}</span>
                        </Message>
                        {
                            !isMobileScreenSize &&
                                <TimeInfo $isRow={isMobileScreenSize}>
                                    <Message>{experience} of experience</Message>
                                    <Message>1 day ago</Message>
                                </TimeInfo> 
                        }                        
                    </TitleBox>

                    <Avatar src={avatar} alt='avatar' width='140px'/>
                </CardTitleWrapper>

                {
                    isMobileScreenSize &&
                        <TimeInfo $isRow={isMobileScreenSize}>
                            <Message>{experience} years of experience</Message>
                            <Message>1 day ago</Message>
                        </TimeInfo> 
                }
            </CardHeader>


            <AboutTitle>
                <Title size={[24, 32]} weight={600}>
                    About
                </Title>
                <Icon name='info' size={24} />
            </AboutTitle>

            <CourseDetails>
                <Message>{duration}</Message>
                <Message>${price} per lesson</Message>
                <Message>{lessonFormat}</Message>
                <Message>Lesson in {lessonLenguage}</Message>
            </CourseDetails> 
            
            <CourseDescr>
                <Message>{content}</Message>
            </CourseDescr>
        </Card>
    );
};

CourseCard.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    lessonFormat: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    subcategory: PropTypes.string.isRequired,
    lessonLenguage: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    }

export default CourseCard;