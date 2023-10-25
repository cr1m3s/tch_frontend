import { Formik } from 'formik';
import { userScheme } from '../../../../shared';
import { FormTitle, Button, Message } from '../../../common';
import {
    Section,
    ResetPasswordFormContainer,
    FormBox,
    InputBox,
    Label,
    Input,
    Error
} from './ResetPasswordForm.styled';


const initialValues = {
    email: '',
};


export const ResetPasswordForm = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log(values);
        resetForm();
    };

    return (
        <Section>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={userScheme}
            >
                {({ errors, touched, values, handleChange, handleBlur, isSubmitting }) => (
                    <ResetPasswordFormContainer>
                        <FormTitle>Reset password</FormTitle>
                        <Message indentBottom={24} position='center'>
                            We will send you instructions on how to reset your password by email
                        </Message>
                        <FormBox>
                            <InputBox>
                                <Label>Email</Label>
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

                            <Button
                                isDisabled={isSubmitting}
                                type='submit'
                                size='fluid'
                            >
                                Submit
                            </Button>
                        </FormBox>
                    </ResetPasswordFormContainer>
                )}
            </Formik>
        </Section>
    )
};

