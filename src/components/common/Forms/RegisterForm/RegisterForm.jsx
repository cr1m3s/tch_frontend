import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { userScheme } from "../../../../shared";
import { useAuthStore } from "../../../../store/auth";
import {
    Button,
    ExternalAuth,
    FormTitle,
    Icon,
} from "../../../common";
import {
    Section,
    RegisterFormContainer,
    LoginLink,
    LoginLinkBox,
    InputBox,
    Input,
    Error,
    CheckboxContainer,
    Checkbox,
    ConfirmationText,
    PolicyLink,
    InputIconShow,
} from "./RegisterForm.styled";


const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    confirmation: false
};


export const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const register = useAuthStore((state) => state.register);
    const navigate = useNavigate();

    const handleSubmit = async (values, { resetForm }) => {

        if (isChecked) {
            await register(values);

            resetForm();
            setIsChecked(false);

            handleNavigateToLogin();
        }
    };

    const handleTogglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
        setPasswordError("");
    };

    const handleToggleConfirmPassword = () => {
        setShowConfirmPassword(
            (prevShowConfirmPassword) => !prevShowConfirmPassword
        );
        setConfirmPasswordError("");
    };

    const handleToggleCheck = () => {
        setIsChecked(!isChecked);
    };

    const handleNavigateToLogin = () => {
        navigate('/login');
    };

    return (
        <Section>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={userScheme}
            >
                {({
                    errors,
                    touched,
                    values,
                    handleChange,
                    handleBlur,
                    isSubmitting,
                }) => (
                    <RegisterFormContainer>
                        <FormTitle>Sign up</FormTitle>
                        <LoginLinkBox>
                            Already have an account?
                            <LoginLink to="/login">Log in</LoginLink>
                        </LoginLinkBox>
                        <Form>
                            <InputBox>
                                <label>Name</label>
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    border={errors.name && touched.name && "1px solid red"}
                                />
                                <Error name="name" component="div" />
                            </InputBox>


                            <InputBox>
                                <label>Email</label>
                                <Input
                                    type="text"
                                    name="email"
                                    value={values.email}
                                    placeholder="Enter email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    border={errors.email && touched.email && "1px solid red"}
                                />
                                <Error name="email" component="div" />
                            </InputBox>


                            <InputBox>
                                <label>Password</label>
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={values.password}
                                    placeholder="Password"
                                    onBlur={handleBlur}
                                    error={errors.password || passwordError}
                                    border={errors.password && touched.password && "1px solid red"}
                                />
                                <InputIconShow onClick={handleTogglePassword}>
                                    {
                                        showPassword
                                            ? <Icon name="eye" size={24} color={"#EEEEEE"} />
                                            : <Icon name="hidden" size={24} color={"#EEEEEE"} />
                                    }
                                </InputIconShow>
                                <Error name="password" component="div" />
                            </InputBox>
                            

                            <InputBox>
                                <label>Confirm password</label>
                                <Input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={values.confirmPassword}
                                    placeholder="Confirm password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    border={
                                        errors.confirmPassword &&
                                        touched.confirmPassword &&
                                        "1px solid red"
                                    }
                                    error={errors.confirmPassword || confirmPasswordError}
                                />
                                <InputIconShow onClick={handleToggleConfirmPassword}>
                                    {
                                        showConfirmPassword
                                            ? <Icon name="eye" size={24} color={"#EEEEEE"} />
                                            : <Icon name="hidden" size={24} color={"#EEEEEE"} />
                                    }                                        
                                </InputIconShow>
                                <Error name="confirmPassword" component="div" />
                            </InputBox>
                            

                            <CheckboxContainer>
                                <label>
                                    <Checkbox>
                                        <Field
                                            name='confirmation'
                                            type='checkbox'
                                            onClick={handleToggleCheck}
                                            value={isChecked}
                                            style={{display: 'none'}}
                                        />

                                        <div>
                                            {
                                                isChecked
                                                    ? <Icon name="checked" size={24} />
                                                    : <Icon name="unchecked" size={24} />
                                            }
                                        </div>
                                        <ConfirmationText>
                                            By checking this box, you are creating an account and you agree to the <PolicyLink target="_blank" to="/conditions">Terms & Conditions</PolicyLink> and <PolicyLink target="_blank" to="/policy">Privacy Policy</PolicyLink>.
                                        </ConfirmationText>
                                        
                                    </Checkbox>
                                    <Error name="confirmation" component="div" />
                                </label>
                            </CheckboxContainer>

                            <Button
                                size="fluid"
                                type="submit"
                                isDisabled={isSubmitting}
                            >
                                Sign up
                            </Button>
                            <ExternalAuth/>
                        </Form>
                    </RegisterFormContainer>
                )}
            </Formik>
        </Section>
    )
};

