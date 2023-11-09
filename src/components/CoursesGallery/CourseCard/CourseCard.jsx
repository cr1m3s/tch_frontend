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


const CourseCard = ({ advert }) => {
    const isMobileScreenSize = window.matchMedia('(max-width: 768px)').matches;
    const { title, attachment, created_at, description, experience, format, language, price, provider, time } = advert;

    return (
        <Card>
            <CardHeader>
                <CardTitleWrapper>
                    <TitleBox>
                        <Title indent={10} size={[24, 32]} weight={600} >{title}</Title>
                        <Message>Provider:</Message> <Message>{provider}</Message>
                        {
                            !isMobileScreenSize &&
                            <TimeInfo $isRow={isMobileScreenSize}>
                                    <Message>{experience}</Message> <Message>of experience</Message>
                                    <Message>{created_at} day ago</Message>
                                </TimeInfo> 
                        }                        
                    </TitleBox>

                    <Avatar src={attachment} alt='avatar' width='140px'/>
                </CardTitleWrapper>

                {
                    isMobileScreenSize &&
                        <TimeInfo $isRow={isMobileScreenSize}>
                            <Message>{experience}</Message> <Message>of experience</Message>
                            <Message>{created_at} day ago</Message>
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
                <Message>{time}</Message>
                <Message>${price} per lesson</Message>
                <Message>{format}</Message>
                <Message>Lesson in {language}</Message>
            </CourseDetails> 
            
            <CourseDescr>
                <Message>{description}</Message>
            </CourseDescr>
        </Card>
    );
};

CourseCard.propTypes = {
    advert: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    provider: PropTypes.string.isRequired,
    provider_id: PropTypes.number.isRequired,
    experience: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    format: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    mobile_phone: PropTypes.string.isRequired,
    telegram: PropTypes.string.isRequired,
};

export default CourseCard;