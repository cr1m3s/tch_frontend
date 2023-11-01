import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Section } from './AddAdvertForm.styled';
import { FormTitle, Button } from '../../common';


const initialValues = {
    title: '',
    category: '',
    subcategory: '',
    time: '',
    format: '',
    price: '',
    language: '',
    text: '',
};


const AddAdvertForm = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log(values);
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
                            {/* // TITLE */}
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

                            {/* // CATEGORY */}
                            <div>
                                <label htmlFor='category'>Category</label>
                                <Field
                                    id='category'
                                    as='select'
                                    name='category'
                                    placeholder='Select match category'
                                    value={values.category}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    border={touched.category && errors.category}
                                >
                                    <option value='language-learning'>Language learning</option>
                                    <option value='it'>IT Sphere</option>
                                    <option value='science'>Science and education</option>
                                    <option value='art'>Art and creativity</option>
                                    <option value='sport'>Sports and fitness</option>
                                    <option value='personality-development'>Personality development</option>
                                    <option value='health'>Health and harmony</option>
                                </Field>
                                <ErrorMessage name='category' component='div' />                                
                            </div>

                            {/* // SUBCATEGORY */}
                            <div>
                                <label htmlFor='subcategory'>Subcategory</label>
                                <Field
                                    id='subcategory'
                                    as='select'
                                    name='subcategory'
                                    placeholder='Select match subcategory'
                                    value={values.subcategory}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    border={touched.subcategory && errors.subcategory}
                                >
                                    <option value='english'>English</option>
                                    <option value='arabic'>Arabic</option>
                                    <option value='french'>French</option>
                                    <option value='spanish'>Spanish</option>
                                    <option value='chinese'>Chinese</option>
                                    <option value='hindi'>Hindi</option>
                                    <option value='german'>German</option>
                                    <option value='other'>Other languages</option>
                                </Field>
                                <ErrorMessage name='subcategory' component='div' />                                
                            </div>

                            {/* // TIME */}
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
                                    <option value='half-hour'>30 min</option>
                                    <option value='academic-hour'>45 min</option>
                                    <option value='hour'>60 min</option>
                                    <option value='one-and-half'>90 min</option>
                                    <option value='two-hours'>120 min</option>
                                    <option value='two-and-half'>150 min</option>
                                    <option value='three-hours'>180 min</option>
                                </Field>
                                <ErrorMessage name='time' component='div' />                                
                            </div>

                            {/* // FORMAT */}
                            <div>
                                <label htmlFor='format'>Format</label>
                                <Field
                                    id='format'
                                    as='select'
                                    name='format'
                                    placeholder='Select format'
                                    value={values.format}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    border={touched.format && errors.format}
                                >
                                    <option value='online'>Online</option>
                                    <option value='offline'>Offline</option>
                                </Field>
                                <ErrorMessage name='format' component='div' />                                
                            </div>

                            {/* // PRICE */}
                            <div>
                                <label htmlFor='price'>Price</label>
                                <Field
                                    id='price'
                                    type='text'
                                    name='price'
                                    placeholder='Enter price'
                                    value={values.price}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    border={touched.price && errors.price}
                                />
                                <ErrorMessage name='price' component='div' />                                
                            </div>

                            {/* // LANGUAGE */}
                            <div>
                                <label htmlFor='language'>Language</label>
                                <Field
                                    id='language'
                                    as='select'
                                    name='language'
                                    placeholder='Select lesson language'
                                    value={values.language}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    border={touched.language && errors.language}
                                >
                                    <option value='english'>English</option>
                                    <option value='arabic'>Arabic</option>
                                    <option value='french'>French</option>
                                    <option value='spanish'>Spanish</option>
                                    <option value='chinese'>Chinese</option>
                                    <option value='hindi'>Hindi</option>
                                    <option value='german'>German</option>
                                    <option value='other'>Other languages</option>
                                </Field>
                                <ErrorMessage name='language' component='div' />                                
                            </div>

                            {/* // TEXT */}
                            <div>
                                <label htmlFor='text'>Description</label>
                                <Field
                                    id='text'
                                    as='textarea'
                                    name='text'
                                    placeholder='Enter text for your course'
                                    value={values.text}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    maxlength='400'
                                    rows='5'
                                    border={touched.text && errors.text}
                                />
                                <ErrorMessage name='text' component='div' />                                
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