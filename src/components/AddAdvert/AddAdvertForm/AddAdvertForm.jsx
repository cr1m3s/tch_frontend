import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Section } from './AddAdvertForm.styled';
import { FormTitle, Button, AccentText, Text } from '../../common';
import { fetchCreateAdvert } from '../../../services';
import { useAuthStore } from '../../../store/auth';


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


    const handleSubmit = (values, { resetForm }) => {
        fetchCreateAdvert(values);
        resetForm();
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
                        <FormTitle>Create advertisement</FormTitle>
                        <Form>
                            <div>
                                <label htmlFor='title'>Title</label>
                                <Field
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
                            </div>

                            <div>
                                <AccentText size={20}>Provider</AccentText>
                                <Text>{user.name}</Text>
                            </div>

                            <div>
                                <label htmlFor='experience'>Experience</label>
                                <Field
                                    id='experience'
                                    type='text'
                                    name='experience'
                                    placeholder='Enter experience in this area'
                                    value={values.experience}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    border={touched.experience && errors.experience}
                                />
                                <ErrorMessage name='experience' component='div' />                                
                            </div>                            

                            <div>
                                <label htmlFor='category'>Category</label>
                                <Field
                                    id='category'
                                    component='select'
                                    name='category'
                                    placeholder='Select match category'
                                    value={values.category}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    border={touched.category && errors.category}
                                >
                                    <option value='Language learning'>Language learning</option>
                                    <option value='IT Sphere'>IT Sphere</option>
                                    <option value='Science and education'>Science and education</option>
                                    <option value='Art and creativity'>Art and creativity</option>
                                    <option value='Sports and fitness'>Sports and fitness</option>
                                    <option value='Personality development'>Personality development</option>
                                    <option value='Health and harmony'>Health and harmony</option>
                                </Field>
                                <ErrorMessage name='category' component='div' />                                
                            </div>

                            <div>
                                <label htmlFor='subcategory'>Subcategory</label>
                                <Field
                                    id='subcategory'
                                    component='select'
                                    name='subcategory'
                                    placeholder='Select match subcategory'
                                    value={values.subcategory}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    border={touched.subcategory && errors.subcategory}
                                >
                                    <option value='English'>English</option>
                                    <option value='Arabic'>Arabic</option>
                                    <option value='French'>French</option>
                                    <option value='Spanish'>Spanish</option>
                                    <option value='Chinese'>Chinese</option>
                                    <option value='Hindi'>Hindi</option>
                                    <option value='German'>German</option>
                                    <option value='Other languages'>Other languages</option>
                                </Field>
                                <ErrorMessage name='subcategory' component='div' />                                
                            </div>

                            <div>
                                <label htmlFor='time'>Time</label>
                                <Field
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
                                </Field>
                                <ErrorMessage name='time' component='div' />                                
                            </div>

                            <div>
                                <label htmlFor='format'>Format</label>
                                <Field
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
                                </Field>
                                <ErrorMessage name='format' component='div' />                                
                            </div>

                            <div>
                                <label htmlFor='price'>Price</label>
                                <Field
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
                            </div>

                            <div>
                                <label htmlFor='language'>Language</label>
                                <Field
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
                                </Field>
                                <ErrorMessage name='language' component='div' />                                
                            </div>

                            <div>
                                <label htmlFor='description'>Description</label>
                                <Field
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
                            </div>

                            <div>
                                <AccentText size={20}>Contacts information</AccentText>
                                <div>
                                    <div>
                                        <label htmlFor='mobile_phone'>Mobile phone</label>
                                        <Field
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
                                    </div>

                                    <div>
                                        <label htmlFor='email'>Email</label>
                                        <Field
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
                                    </div>

                                    <div>
                                        <label htmlFor='telegram'>Telegram</label>
                                        <Field
                                            id='telegram'
                                            type='text'
                                            name='telegram'
                                            placeholder='Enter your Telegram'
                                            value={values.telegram}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            border={touched.telegram && errors.telegram}
                                        />
                                        <ErrorMessage name='telegram' component='div' />                                
                                    </div>                                    
                                </div>
                            </div>
                            
                            <Button
                                size='fluid'
                                type='submit'
                                isDisabled={isSubmitting}
                            >
                                Confirm
                            </Button>                            
                        </Form>
                    </div>
                )}

            </Formik>
        </Section>
    );
};

export default AddAdvertForm;