import {
    FORMS_VALIDATION,
    EMAIL_REGEXP,
    PASSWORD_REGEXP,
} from '../formsValidation';
import * as Yup from 'yup';


export const userScheme = Yup.object().shape({
    name: Yup
        .string()
        .min(FORMS_VALIDATION.minName, 'Name must have at least 2 characters')
        .max(FORMS_VALIDATION.maxName, 'Name can not have more then 16 characters')
        .required("Name is required"),
    email: Yup
        .string()
        .matches(
            EMAIL_REGEXP,
            'Invalid email format'
        )
        .required("Email is required"),
    password: Yup
        .string()
        .matches(
            PASSWORD_REGEXP,
            "Password must contain at least 6 characters, one uppercase, one number and one special case character"
        )        
        .required("Password is required"),
    currentPassword: Yup
        .string()
        .matches(
            PASSWORD_REGEXP,
            "Password must contain at least 6 characters, one uppercase, one number and one special case character"
        )        
        .required('Enter current password is required'),    
    confirmPassword: Yup
        .string()
        .required("Conformation is required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
    confirmation: Yup
        .bool()
        .oneOf([true], "You must accept the terms and conditions")
});