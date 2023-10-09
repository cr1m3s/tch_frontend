import defaultAvatar from '../../../assets/images/default-avatar.png'
import { Icon, Message, Title } from '../../common';
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


const CourseCard = () => {
    const isMobileScreenSize = window.matchMedia('(max-width: 768px)').matches;

    return (
        <Card>
            <CardHeader>
                <CardTitleWrapper>
                    <TitleBox>
                        <Title indent={10} size={[24, 32]} weight={600} >Chinese mastery course</Title>
                        <Message>
                            <span>Provider:</span> <span>Huram Algargni</span>
                        </Message>
                        {
                            !isMobileScreenSize &&
                                <TimeInfo $isRow={isMobileScreenSize}>
                                    <Message>10 years of experience</Message>
                                    <Message>1 day ago</Message>
                                </TimeInfo> 
                        }                        
                    </TitleBox>

                    <Avatar src={defaultAvatar} alt='avatar' width='140px' />
                </CardTitleWrapper>

                {
                    isMobileScreenSize &&
                        <TimeInfo $isRow={isMobileScreenSize}>
                            <Message>5 years of experience</Message>
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
                <Message>45 minutes</Message>
                <Message>$10 per lesson</Message>
                <Message>Online</Message>
                <Message>Lesson in english</Message>
            </CourseDetails> 
            
            <CourseDescr>
                <Message>Embark on a transformative linguistic journey with our Chinese Mastery Course, a comprehensive and immersive learning experience that will empower you to master the rich and captivating Mandarin language. Whether you're a complete beginner or looking to enhance yo... </Message>
            </CourseDescr>
        </Card>
    );
};

export default CourseCard;