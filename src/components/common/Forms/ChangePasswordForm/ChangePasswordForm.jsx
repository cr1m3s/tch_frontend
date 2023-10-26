import { useState } from 'react';
import { Formik } from 'formik';
import { changePasswordScheme } from '../../../../shared';
import { useAuthStore } from '../../../../store/auth';
import { FormTitle } from '../FormTitle';
import { Icon, Button, Message, AccentText } from '../../../common';
import {
    Section,
    ChangePasswordFormContainer,
    FormDescr,
    FormBox,
    InputBoxesWrapper,
    InputBox,
    Input,
    Error,
    InputIconShow
} from './ChangePasswordForm.styled';


const initialValues = {
    currentPassword: '',
    password: '',
    confirmPassword: ''
};


export const ChangePasswordForm = () => {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [currentPasswordError, setCurrentPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const { user, updateUserData } = useAuthStore();
    const userEmail = user.email;


    const handleSubmit = (values, { resetForm }) => {
        updateUserData(values);
        resetForm();
    };

    const handleToggleShowCurrentPassword = () => {
        setShowCurrentPassword((prevShowCurrentPassword) => !prevShowCurrentPassword);
        setCurrentPasswordError('');
    };

    const handleToggleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
        setPasswordError('');
    };

    const handleToggleShowConfirmPassword = () => {
        setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
        setConfirmPasswordError('');
    };


    return (
        <Section>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={changePasswordScheme}
            >
                {({ errors, touched, values, handleChange, handleBlur, isSubmitting }) => (
                    <ChangePasswordFormContainer>
                        <FormTitle>Change your password</FormTitle>
                        <FormDescr>
                            <Message>Fill in the form to change the password for account:</Message> <AccentText size={20}>{userEmail}</AccentText>
                        </FormDescr>
                        <FormBox>
                            <InputBoxesWrapper>
                                <InputBox>
                                    <label>Current password</label>
                                    <Input
                                        type={showCurrentPassword ? 'text' : 'password'}
                                        name='currentPassword'
                                        value={values.currentPassword}
                                        placeholder='Enter your password'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={errors.currentPassword || currentPasswordError}
                                        border={errors.currentPassword && touched.currentPassword && '1px solid red'}
                                    />
                                    <InputIconShow onClick={handleToggleShowCurrentPassword}>
                                        {
                                            showCurrentPassword
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

                                <InputBox>
                                    <label>New password</label>
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        name='password'
                                        value={values.password}
                                        placeholder='Enter your password'
                                        onBlur={handleBlur}
                                        error={errors.password || passwordError}
                                        border={errors.password && touched.password && '1px solid red'}
                                    />
                                    <InputIconShow onClick={handleToggleShowPassword}>
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

                                <InputBox>
                                    <label>Confirm password</label>
                                    <Input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        name='confirmPassword'
                                        value={values.confirmPassword}
                                        placeholder='Enter your password'
                                        onBlur={handleBlur}
                                        error={errors.confirmPassword || confirmPasswordError}
                                        border={errors.confirmPassword && touched.confirmPassword && '1px solid red'}
                                    />
                                    <InputIconShow onClick={handleToggleShowConfirmPassword}>
                                        {
                                            showConfirmPassword
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
                                    <Error name='confirmPassword' component='div' />
                                </InputBox>
                            </InputBoxesWrapper>


                            <Button
                                isDisabled={isSubmitting}
                                type='submit'
                                size='fluid'
                            >Submit
                            </Button>
                        </FormBox>
                    </ChangePasswordFormContainer>
                )}

            </Formik>
        </Section>
    );
}

