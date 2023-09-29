import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import {
    Section,
    ResetPasswordFormContainer,
    FormBox,
    InputBox,
    Label,
    Input,
    Error
} from "./ResetPasswordForm.styled";
import FormTitle from "../FormTitle/FormTitle";
import { Button } from "../../Button/Button";
import Message from "../../Message/Message";





const userSchema = Yup.object().shape({
    email: Yup.string().required("Enter current email is required").email("Email is invalid"),
});


const initialValues = {
    email: "",
};



const ResetPasswordForm = () => {
    const [ userData, setUserData ] = useState({});

    const handleSubmit = ({ email }, { resetForm }) => {
        setUserData({ email });
        resetForm();
    };
    
    return (
        <Section>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={userSchema}        
            >
                {({ errors, touched, values, handleChange, handleBlur, isSubmitting }) => (
                    <ResetPasswordFormContainer>
                        <FormTitle>Reset password</FormTitle>
                        <Message indentBottom={24} position="center">
                            We will send you instructions on how to reset your password by email
                        </Message>
                        <FormBox>
                            <InputBox>
                                <Label>Email</Label>
                                <Input
                                    type="text"
                                    name="email"
                                    value={values.email}
                                    placeholder="Enter email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.email}
                                    border={errors.email && touched.email && "1px solid red"}
                                />
                                <Error name="email" component="div" />
                            </InputBox>

                            <Button
                                isDisabled={isSubmitting}
                                type="submit"
                                size="fluid"
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

export default ResetPasswordForm;