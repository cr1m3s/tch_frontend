import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import {
    Section,
    LoginFormContainer,
    FormBox,
    LoginLink,
    LoginLinkBox,
    InputBox,
    Input,
    Error,
    InputIconShow,
    ForgotPassword
} from './LoginForm.styled';
import { FormTitle } from '../FormTitle';
import { Icon } from '../../Icon';
import { ExternalAuth } from '../ExternalAuth';
import { Button } from '../../Button';
import { FORMS_VALIDATION } from '../../../../shared';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../../../store/auth';



const userSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
        .min(FORMS_VALIDATION.minPassword, 'Password mast be at least 6 characters')
        .max(FORMS_VALIDATION.maxPassword, 'Password can not have more then 16 characters')
        .required('Password is required'),
});


const initialValues = {
    email: '',
    password: '',
};


const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    const login = useAuthStore((state) => state.login)
    const navigate = useNavigate();


    const handleSubmit = async(values, { resetForm }) => {
        await login(values);
        resetForm();
        handleNavigateToCourses();
    };

    const handleTogglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
        setPasswordError('');
    };

    const handleNavigateToCourses = () => {
        navigate('/')
    };

    return (
        <Section>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={userSchema}
            >
                {({
                    errors,
                    touched,
                    values,
                    handleChange,
                    handleBlur,
                    isSubmitting,
                }) => (
                    <LoginFormContainer>
                        <FormTitle>Log in</FormTitle>
                        <LoginLinkBox>
                            <p>Don’t have an account?</p>
                            <LoginLink to='/register'>Sign up</LoginLink>
                        </LoginLinkBox>
                        <FormBox>
                            <div>
                                <InputBox>
                                    <label>Email</label>
                                    <Input
                                        type='text'
                                        name='email'
                                        value={values.email}
                                        placeholder='Enter email'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={errors.email}
                                        border={errors.email && touched.email && '1px solid red'}
                                    />
                                    <Error name='email' component='div' />
                                </InputBox>

                                <InputBox>
                                    <label>Password</label>
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        name='password'
                                        value={values.password}
                                        placeholder='Password'
                                        onBlur={handleBlur}
                                        error={errors.password || passwordError}
                                        border={errors.password && touched.password && '1px solid red'}
                                    />
                                    <InputIconShow onClick={handleTogglePassword}>
                                        {
                                            showPassword
                                                ? <Icon
                                                    name='eye'
                                                    size={24}
                                                    color={'#EEE'}
                                                />
                                                : <Icon
                                                    name='hidden'
                                                    size={24}
                                                    color={'#EEE'}
                                                />
                                        }
                                    </InputIconShow>
                                    <Error name='password' component='div' />
                                </InputBox>
                            </div>


                            <ForgotPassword to='/reset-password'>Forgot password?</ForgotPassword>

                            <Button
                                size='fluid'
                                type='submit'
                                isDisabled={isSubmitting}
                            >
                                Log In
                            </Button>       
                            <ExternalAuth/>
                        </FormBox>
                    </LoginFormContainer>
                )}
            </Formik>
        </Section>
    )
};

export default LoginForm;