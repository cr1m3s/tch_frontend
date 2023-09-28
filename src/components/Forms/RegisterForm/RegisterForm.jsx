import { Formik } from "formik";
import * as Yup from "yup";
import { Form } from "formik";
import { useState } from "react";
import {
    Section,
    RegisterFormContainer,
    LoginLink,
    LoginLinkBox,
    InputBox,
    Input,
    Error,
    CheckboxContainer,
    ConfirmationText,
    PolicyLink,
    InputIconShow
} from "./RegisterForm.styled";
import FormTitle from "../FormTitle/FormTitle";
import ButtonsAuthContainer from "../ButtonsAuthContainer/ButtonsAuthContainer";
import { Icon } from "../../Icon";



const userSchema = Yup.object().shape({
    name: Yup.string().min(2).max(16).required("Name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
        .min(6, "Password mast be at least 6 characters")
        .max(16, "Password can not have more then 16 characters")
        .required("Password is required"),
    confirmPassword: Yup.string()
        .required("Conformation is required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
    confirmation: Yup.bool().oneOf([true], "Confirmation is required")
});


const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
};


const RegisterForm = () => {
    const [userData, setUserData] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const handleSubmit = ({ name, email, password }, { resetForm }) => {
        if (isChecked) {
            setUserData({ name, email, password });
            console.log(userData);

            resetForm();
            setIsChecked(false);
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
                    <RegisterFormContainer>
                        <FormTitle>Sign up</FormTitle>
                        <LoginLinkBox>
                            <p>Already have an account?</p>
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
                            </InputBox>
                            <Error name="password" component="div" />

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
                            </InputBox>
                            <Error name="confirmPassword" component="div" />   
                                    
                            <CheckboxContainer>
                                <div onClick={handleToggleCheck}>
                                    {
                                        isChecked
                                            ? <Icon name="checked" size={24} />
                                            : <Icon name="unchecked" size={24} />
                                    }
                                </div>
                                <ConfirmationText>
                                    By checking this box, you are creating an account and you agree to the <PolicyLink target="_blank" to="/conditions">Terms & Conditions</PolicyLink> and <PolicyLink target="_blank" to="/policy">Privacy Policy</PolicyLink>.
                                </ConfirmationText>
                            </CheckboxContainer>                            

                            <ButtonsAuthContainer
                                text={"Sign up"}
                                disabled={isSubmitting}
                            />
                        </Form>
                    </RegisterFormContainer>
                )}
            </Formik>        
        </Section>
    )
};

export default RegisterForm;