import { useState } from 'react';
import { Formik } from 'formik';
import { userScheme } from '../../../../shared';
import { FormTitle } from '../FormTitle';
import { Icon, Button, AccentText, Message } from '../../../common';
import {
    Section,
    ChangeLoginFormContainer,
    FormDescr,
    FormBox,
    InputBox,
    Input,
    Error,
    InputIconShow
} from './ChangeEmailForm.styled';


const initialValues = {
    email: '',
    currentPassword: '',
};


export const ChangeEmailForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = ({ email, currentPassword }, { resetForm }) => {
        console.log('New Email:', email);
        console.log('Current Password:', currentPassword);

        resetForm();
    };

    const handleTogglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
        setPasswordError('');
    };


    return (
        <Section>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={userScheme}
            >
                {({ errors, touched, values, handleChange, handleBlur, isSubmitting }) => (
                    <ChangeLoginFormContainer>
                        <FormTitle>Change your email</FormTitle>
                        <FormDescr>
                            <Message>Fill in the form to change the email for account:</Message> <AccentText size={20}>a.salute@gmail.com</AccentText>
                        </FormDescr>
                        <FormBox>
                            <InputBox>
                                <label>New email</label>
                                <Input
                                    type='text'
                                    name='email'
                                    value={values.email}
                                    placeholder='Enter new email'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    border={errors.email && touched.email && '1px solid red'}
                                />
                                <Error name='email' component='div' />
                            </InputBox>

                            <InputBox>
                                <label>Current password</label>
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    name='currentPassword'
                                    value={values.currentPassword}
                                    placeholder='Enter your password'
                                    onBlur={handleBlur}
                                    error={errors.currentPassword || passwordError}
                                    border={errors.currentPassword && touched.currentPassword && '1px solid red'}
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
                                <Error name='currentPassword' component='div' />
                            </InputBox>

                            <Button
                                isDisabled={isSubmitting}
                                type='submit'
                                size='fluid'
                            >Submit
                            </Button>
                        </FormBox>
                    </ChangeLoginFormContainer>
                )}

            </Formik>
        </Section>
    );
}

