import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
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
import { FORMS_VALIDATION } from '../../../../shared';
import { useAuthStore } from '../../../../store/auth';



const userSchema = Yup.object().shape({
    newEmail: Yup.string().required('Email is required').email('Email is invalid'),
    currentPassword: Yup.string()
        .min(FORMS_VALIDATION.minPassword, 'Password mast be at least 6 characters')
        .max(FORMS_VALIDATION.maxPassword, 'Password can not have more then 16 characters')
        .required('Password is required'),
});


const initialValues = {
    newEmail: '',
    currentPassword: '',
};


export const ChangeEmailForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const { user, updateUserData } = useAuthStore();
    const userEmail = user.email;

    const handleSubmit = (values, { resetForm }) => {
        updateUserData(values);
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
                validationSchema={userSchema}
            >
                {({ errors, touched, values, handleChange, handleBlur, isSubmitting }) => (
                    <ChangeLoginFormContainer>
                        <FormTitle>Change your email</FormTitle>
                        <FormDescr>
                            <Message>Fill in the form to change the email for account:</Message> <AccentText size={20}>{ userEmail }</AccentText>
                        </FormDescr>
                        <FormBox>
                            <InputBox>
                                <label>New email</label>
                                <Input
                                    type='text'
                                    name='newEmail'
                                    value={values.newEmail}
                                    placeholder='Enter new email'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    border={errors.newEmail && touched.newEmail && '1px solid red'}
                                />
                                <Error name='newEmail' component='div' />
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

