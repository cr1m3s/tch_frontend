import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Icon, Message, Title } from '../../common';
import defaultImg from '../../../assets/images/default-avatar.png';
import {
    Card,
    CardHeader,
    CardTitleWrapper,
    TitleBox,
    Avatar,
    MobileSizeTimeInfo,
    LargeSizeTimeInfo,
    AdvertSubtitle,
    CourseDetails,
    CourseDescr,
    CategoryContainer,
    EducationContainer,
    ContactsList,
} from './CourseCard.styled';


const CourseCard = ({ advert }) => {
    const { id, title, attachment, created_at, description, experience, format, language, price, provider, time, mobile_phone, telegram, email, category } = advert;
    const pathname = useLocation().pathname;
    const [isFullAdvertInfo, setIsFullAdvertInfo] = useState(false);


    useEffect(() => {
        if (pathname === `/courses/${id}`) {
            setIsFullAdvertInfo(true);
            return;
        }
        setIsFullAdvertInfo(false);
    }, [pathname, id])
    
    const getAgeOfAdvert = () => {
        const creationDate = new Date(created_at);
        const currentDate = new Date();
        const ageOfAdvertInDays = (currentDate - creationDate) / 86400000 ^ 0;
        const message = `${ageOfAdvertInDays} ${(ageOfAdvertInDays === 1) ? 'day' : 'days'} ago`
        
        return message;
    };


    return (
        <Link to={`/courses/${id}`}>
            <Card $isFullAdvertInfo={isFullAdvertInfo}>
                <CardHeader>
                    <CardTitleWrapper>
                        <TitleBox>
                            <Title indent={10} size={[24, 32]} weight={600} >{title}</Title>
                            <Message>Provider:</Message> <Message>{provider}</Message>
                                <LargeSizeTimeInfo>
                                    <div>
                                        <Message>{experience}</Message> <Message>of experience</Message>
                                    </div>
                                    <Message>{getAgeOfAdvert()}</Message>
                                </LargeSizeTimeInfo>                       
                        </TitleBox>

                        <Avatar src={ attachment ? attachment : defaultImg } alt='avatar' width='140px' />
                    </CardTitleWrapper>

                    <MobileSizeTimeInfo>
                        <div>
                            <Message>{experience}</Message> <Message>of experience</Message>
                        </div>
                        <Message>{getAgeOfAdvert()}</Message>
                    </MobileSizeTimeInfo>
                </CardHeader>

                {
                    isFullAdvertInfo && (
                        <>
                            <CategoryContainer>
                                <AdvertSubtitle>
                                    <Title size={[24, 32]} weight={600}>Category</Title>
                                    <Icon name='category' size={24} />
                                </AdvertSubtitle>
                                <div>
                                    <Message>{category}</Message>
                                </div>
                            </CategoryContainer>

                            <EducationContainer>
                                <AdvertSubtitle>
                                    <Title size={[24, 32]} weight={600}>Education</Title>
                                    <Icon name='education' size={24} />
                                </AdvertSubtitle>
                            </EducationContainer>
                        </>

                    )
                }

                <div>
                    <AdvertSubtitle>
                        <Title size={[24, 32]} weight={600}>About</Title>
                        <Icon name='info' size={24}/>
                    </AdvertSubtitle>


                    <CourseDetails>
                        <Message>{time}</Message>
                        <Message>${price} per lesson</Message>
                        <Message>{format}</Message>
                        <Message>Lesson in {language}</Message>
                    </CourseDetails>               
                </div>

                <CourseDescr>
                    <Message>{description}</Message>
                </CourseDescr>

                {
                    isFullAdvertInfo && (
                        <div>
                            <AdvertSubtitle>
                                <Title size={[24, 32]} weight={600}>Contacts</Title>
                                <Icon name='contacts' size={24}/>
                            </AdvertSubtitle>
                            <ContactsList>
                                <Message>Mobile phone: {mobile_phone}</Message>
                                <Message>Email: {email}</Message>
                                <Message>Telegram: {telegram}</Message>
                            </ContactsList>
                        </div>
                    )
                }
            </Card>
        </Link>

    );
};


CourseCard.propTypes = {
    advert: PropTypes.object.isRequired,
    id: PropTypes.number,
    title: PropTypes.string,
    provider: PropTypes.string,
    provider_id: PropTypes.number,
    experience: PropTypes.string,
    time: PropTypes.string,
    price: PropTypes.number,
    format: PropTypes.string,
    language: PropTypes.string,
    description: PropTypes.string,
    created_at: PropTypes.string,
    mobile_phone: PropTypes.string,
    telegram: PropTypes.string,
};


export default CourseCard;