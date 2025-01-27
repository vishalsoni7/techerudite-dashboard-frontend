import * as Yup from "yup";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../constant/regex";
import { RegistrationTypes } from "../types/credentials";

export const registrationValidationSchema: Yup.ObjectSchema<RegistrationTypes> =
  Yup.object().shape({
    firstName: Yup.string()
      .required("First Name is a required field!")
      .min(2, "First Name must be at least 2 characters")
      .max(20, "First Name cannot exceed 20 characters"),
    lastName: Yup.string()
      .required("Last Name is a required field!")
      .min(2, "Last Name must be at least 2 characters")
      .max(20, "Last Name cannot exceed 20 characters"),
    email: Yup.string()
      .required("Email is a required field!")
      .matches(EMAIL_REGEX, "Invalid email format"),
    password: Yup.string()
      .required("Password is a required field!")
      .min(8, "Password must be at least 8 characters")
      .max(10, "Password cannot exceed 10 characters")
      .matches(
        PASSWORD_REGEX,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    role: Yup.string().required("Role is a required field!"),
  });
