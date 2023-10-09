import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
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
import { FORMS_VALIDATION } from '../../../../shared';


const userSchema = Yup.object().shape({
    currentPassword: Yup.string()
        .min(FORMS_VALIDATION.minPassword, 'Your password has at least 6 characters')
        .max(FORMS_VALIDATION.maxPassword, 'Your password can not have more then 16 characters')
        .required('Enter current password is required'),
    newPassword: Yup.string()
        .min(FORMS_VALIDATION.minPassword, 'Password mast be at least 6 characters')
        .max(FORMS_VALIDATION.maxPassword, 'Password can not have more then 16 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .required('Conformation is required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});


const initialValues = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
};


export const ChangePasswordForm = () => {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [currentPasswordError, setCurrentPasswordError] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [newPasswordError, setNewPasswordError] = useState('');
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleSubmit = ({ newPassword }, { resetForm }) => {
        console.log('New Password:', newPassword);

        resetForm();
    };

    const handleToggleShowCurrentPassword = () => {
        setShowCurrentPassword((prevShowCurrentPassword) => !prevShowCurrentPassword);
        setCurrentPasswordError('');
    };

    const handleToggleShowNewPassword = () => {
        setShowNewPassword((prevShowNewPassword) => !prevShowNewPassword);
        setNewPasswordError('');
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
                validationSchema={userSchema}
            >
                {({ errors, touched, values, handleChange, handleBlur, isSubmitting }) => (
                    <ChangePasswordFormContainer>
                        <FormTitle>Change your password</FormTitle>
                        <FormDescr>
                            <Message>Fill in the form to change the password for account:</Message> <AccentText size={20}>a.salute@gmail.com</AccentText>
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
                                        type={showNewPassword ? 'text' : 'password'}
                                        name='newPassword'
                                        value={values.newPassword}
                                        placeholder='Enter your password'
                                        onBlur={handleBlur}
                                        error={errors.newPassword || newPasswordError}
                                        border={errors.newPassword && touched.newPassword && '1px solid red'}
                                    />
                                    <InputIconShow onClick={handleToggleShowNewPassword}>
                                        {
                                            showNewPassword
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
                                    <Error name='newPassword' component='div' />
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

