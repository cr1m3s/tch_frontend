import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import {
    Section,
    CreatePasswordFormContainer,
    MessageWrapper,
    FormBox,
    InputBoxesWrapper,
    InputBox,
    Label,
    Input,
    Error,
    InputIconShow
} from './CreateNewPasswordForm.styled';
import { FormTitle, Button, Message, Icon } from '../../../common';
import { FORMS_VALIDATION } from '../../../../shared'

const userSchema = Yup.object().shape({
    password: Yup.string()
        .min(FORMS_VALIDATION.minPassword, 'Password mast be at least 6 characters')
        .max(FORMS_VALIDATION.maxPassword, 'Password can not have more then 16 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .required('Conformation is required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});


const initialValues = {
    password: '',
    confirmPassword: '',
};


export const CreateNewPasswordForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState('');


    const handleSubmit = ({ password }, { resetForm }) => {
        console.log(password);
        resetForm();
    };

    const handleTogglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
        setPasswordError('');
    };

    const handleToggleConfirmPassword = () => {
        setShowConfirmPassword(
            (prevShowConfirmPassword) => !prevShowConfirmPassword
        );
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
                    <CreatePasswordFormContainer>
                        <FormTitle>Create new password</FormTitle>
                        <MessageWrapper>
                            <Message indentBottom={24} position='center'>
                                Enter a new password for account: a.salute@gmail.com
                            </Message>
                        </MessageWrapper>

                        <FormBox>
                            <InputBoxesWrapper>
                                <InputBox>
                                    <Label>Password</Label>
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        name='password'
                                        value={values.password}
                                        placeholder='Enter your password'
                                        onBlur={handleBlur}
                                        error={errors.password || passwordError}
                                        border={errors.password && touched.password && '1px solid red'}
                                    />
                                    <InputIconShow onClick={handleTogglePassword}>
                                        {
                                            showPassword
                                                ? <Icon name='eye' size={24} color={'#EEEEEE'} />
                                                : <Icon name='hidden' size={24} color={'#EEEEEE'} />
                                        }
                                    </InputIconShow>
                                    <Error name='password' component='div' />
                                </InputBox>

                                <InputBox>
                                    <Label>Confirm password</Label>
                                    <Input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        name='confirmPassword'
                                        value={values.confirmPassword}
                                        placeholder='Enter your password'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        border={
                                            errors.confirmPassword &&
                                            touched.confirmPassword &&
                                            '1px solid red'
                                        }
                                        error={errors.confirmPassword || confirmPasswordError}
                                    />
                                    <InputIconShow onClick={handleToggleConfirmPassword}>
                                        {
                                            showConfirmPassword
                                                ? <Icon name='eye' size={24} color={'#EEEEEE'} />
                                                : <Icon name='hidden' size={24} color={'#EEEEEE'} />
                                        }
                                    </InputIconShow>
                                    <Error name='confirmPassword' component='div' />
                                </InputBox>
                            </InputBoxesWrapper>

                            <Button
                                isDisabled={isSubmitting}
                                type='submit'
                                size='fluid'
                            >
                                Submit
                            </Button>
                        </FormBox>
                    </CreatePasswordFormContainer>
                )}
            </Formik>
        </Section>
    )
};


