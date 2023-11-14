import { Formik, ErrorMessage } from 'formik';
import { Button, Text } from '../../common';
import { fetchCreateAdvert } from '../../../services';
import { useAuthStore } from '../../../store/auth';
import Avatar from '../../../assets/images/default-avatar.png'
import {
    Section,
    StyledForm,
    AdvertFormHeaderContainer,
    AdvertTitle,
    AdvertTitleInput,
    StyledTitle,
    Label,
    ExperienceInput,
    ProviderInfoContainer,
    MobileSizeAvatarContainer,
    LargeSizeAvatarContainer,
    AvatarImg,
    ExperienceInfoContainer,
    CategoriesAllInfoContainer,
    CategoryContainer,
    CategoryInput,
    AdvertOptionContainer,
    OptionInputContainer,
    OptionInput,
    DescriptionContainer,
    DescriptionText,
    ContactsInfoContainer,
    ContactsSubtitle,
    ContactsList,
    InfoContainer,
    ContactLabel,
    ContactInfoInput,
} from './AddAdvertForm.styled';
import { useState } from 'react';

const initialValues = {
    title: '',
    experience: '',
    category: '',
    subcategory: '',
    time: '',
    format: '',
    price: null,
    language: '',
    description: '',
    mobile_phone: '',
    email: '',
    telegram: ''
};

const AddAdvertForm = () => {
    const { user } = useAuthStore();
    const [isChosenCategory, setIsChosenCategory] = useState(false);


    const handleSubmit = (values, { resetForm }) => {
        fetchCreateAdvert(values);
        resetForm();
    };


    const handleCategoryChange = (e) => {
        const category = e.currentTarget.value;

        if (category !== '') {
            setIsChosenCategory(true);
        } else {
            setIsChosenCategory(false);
        }
    };


    return (
        <Section>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                {({
                    errors,
                    touched,
                    values,
                    handleChange,
                    handleBlur,
                    isSubmitting,
                }) => (
                    
                    <div>
                        <StyledTitle>Create advertisement</StyledTitle>
                        <StyledForm>
                            <AdvertFormHeaderContainer>
                                <div>
                                    <AdvertTitle>
                                        <Label htmlFor='title'>Title</Label>
                                        <AdvertTitleInput
                                            id='title'
                                            type='text'
                                            name='title'
                                            placeholder='Enter title for your course'
                                            value={values.title}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            border={touched.title && errors.title}
                                        />
                                        <ErrorMessage name='title' component='div' />                                
                                    </AdvertTitle>

                                    <ProviderInfoContainer>
                                        <Label>Provider</Label>
                                        <Text>{user.name}</Text>

                                        <MobileSizeAvatarContainer>
                                            <AvatarImg src={Avatar} alt="avatar" />
                                        </MobileSizeAvatarContainer>
                                        
                                    </ProviderInfoContainer>

                                    <ExperienceInfoContainer>
                                        <Label htmlFor='experience'>Experience</Label>
                                        <ExperienceInput
                                            id='experience'
                                            type='text'
                                            name='experience'
                                            placeholder='years / months'
                                            value={values.experience}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            border={touched.experience && errors.experience}
                                        />
                                        <ErrorMessage name='experience' component='div' />                                
                                    </ExperienceInfoContainer>                                    
                                </div>

                                <LargeSizeAvatarContainer>
                                    <AvatarImg src={Avatar} alt="avatar" />
                                </LargeSizeAvatarContainer>

                            </AdvertFormHeaderContainer>


                            <CategoriesAllInfoContainer>
                                <CategoryContainer>
                                    <Label htmlFor='category'>Category</Label>
                                        <CategoryInput
                                            id='category'
                                            type='text'
                                            name='category'
                                            placeholder='Select match category'
                                            value={values.category}
                                            onChange={(e) => {
                                                handleCategoryChange(e);
                                                handleChange(e)
                                            }}
                                            onBlur={handleBlur}
                                            border={touched.category && errors.category}
                                        />
                                    <ErrorMessage name='category' component='div' />                                
                                </CategoryContainer>

                                {
                                    isChosenCategory && (
                                        <CategoryContainer>
                                            <Label htmlFor='subcategory'>Subcategory</Label>
                                            <CategoryInput
                                                id='subcategory'
                                                type='text'
                                                name='subcategory'
                                                placeholder='Select match subcategory'
                                                value={values.subcategory}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                border={touched.subcategory && errors.subcategory}
                                            />
                                            <ErrorMessage name='subcategory' component='div' />                                
                                        </CategoryContainer>
                                    )
                                }
                            </CategoriesAllInfoContainer>

                            
                            <AdvertOptionContainer>
                                <OptionInputContainer>
                                    <Label htmlFor='time'>Time</Label>
                                    <OptionInput
                                        id='time'
                                        as='select'
                                        name='time'
                                        placeholder='Select time'
                                        value={values.time}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        border={touched.time && errors.time}
                                    >
                                        <option value='30 min'>30 min</option>
                                        <option value='45 min'>45 min</option>
                                        <option value='60 min'>60 min</option>
                                        <option value='90 min'>90 min</option>
                                        <option value='120 min'>120 min</option>
                                        <option value='150 min'>150 min</option>
                                        <option value='180 min'>180 min</option>
                                    </OptionInput>
                                    <ErrorMessage name='time' component='div' />                                
                                </OptionInputContainer>

                                <OptionInputContainer>
                                    <Label htmlFor='format'>Format</Label>
                                    <OptionInput
                                        id='format'
                                        component='select'
                                        name='format'
                                        placeholder='Select format'
                                        value={values.format}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        border={touched.format && errors.format}
                                    >
                                        <option value='Online'>Online</option>
                                        <option value='Offline'>Offline</option>
                                    </OptionInput>
                                    <ErrorMessage name='format' component='div' />                                
                                </OptionInputContainer>

                                <OptionInputContainer>
                                    <Label htmlFor='price'>Price</Label>
                                    <OptionInput
                                        id='price'
                                        type='number'
                                        name='price'
                                        placeholder='Enter price'
                                        value={values.price}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        border={touched.price && errors.price}
                                    />
                                    <ErrorMessage name='price' component='div' />                                
                                </OptionInputContainer>

                                <OptionInputContainer>
                                    <Label htmlFor='language'>Language</Label>
                                    <OptionInput
                                        id='language'
                                        component='select'
                                        name='language'
                                        placeholder='Select lesson language'
                                        value={values.language}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        border={touched.language && errors.language}
                                    >
                                        <option value='English'>English</option>
                                        <option value='Arabic'>Arabic</option>
                                        <option value='French'>French</option>
                                        <option value='Spanish'>Spanish</option>
                                        <option value='Chinese'>Chinese</option>
                                        <option value='Hindi'>Hindi</option>
                                        <option value='German'>German</option>
                                        <option value='Other languages'>Other languages</option>
                                    </OptionInput>
                                    <ErrorMessage name='language' component='div' />                                
                                </OptionInputContainer>
                            </AdvertOptionContainer>


                            <DescriptionContainer>
                                <Label htmlFor='description'>Description</Label>
                                <DescriptionText
                                    id='description'
                                    as='textarea'
                                    name='description'
                                    placeholder='Enter description for your course'
                                    value={values.description}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    maxlength='400'
                                    rows='5'
                                    border={touched.description && errors.description}
                                />
                                <ErrorMessage name='description' component='div' />                                
                            </DescriptionContainer>

                            <ContactsInfoContainer>
                                <ContactsSubtitle>Contacts information</ContactsSubtitle>
                                <ContactsList>
                                    <InfoContainer>
                                        <ContactLabel htmlFor='mobile_phone'>Mobile phone</ContactLabel>
                                        <ContactInfoInput
                                            id='mobile_phone'
                                            type='tel'
                                            name='mobile_phone'
                                            placeholder='Enter your mobile_phone'
                                            value={values.mobile_phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            border={touched.mobile_phone && errors.mobile_phone}
                                        />
                                        <ErrorMessage name='mobile_phone' component='div' />                                
                                    </InfoContainer>

                                    <InfoContainer>
                                        <ContactLabel htmlFor='email'>Email</ContactLabel>
                                        <ContactInfoInput
                                            id='email'
                                            type='email'
                                            name='email'
                                            placeholder='Enter your email'
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            border={touched.email && errors.email}
                                        />
                                        <ErrorMessage name='email' component='div' />                                
                                    </InfoContainer>

                                    <InfoContainer>
                                        <ContactLabel htmlFor='telegram'>Telegram</ContactLabel>
                                        <ContactInfoInput
                                            id='telegram'
                                            type='text'
                                            name='telegram'
                                            placeholder='Enter your Telegram nikname'
                                            value={values.telegram}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            border={touched.telegram && errors.telegram}
                                        />
                                        <ErrorMessage name='telegram' component='div' />                                
                                    </InfoContainer>                                    
                                </ContactsList>
                            </ContactsInfoContainer>
                            
                            <Button
                                size='standard'
                                variant='primary'
                                type='submit'
                                isDisabled={isSubmitting}
                            >
                                Confirm
                            </Button>                            
                        </StyledForm>
                    </div>
                )}

            </Formik>
        </Section>
    );
};

export default AddAdvertForm;