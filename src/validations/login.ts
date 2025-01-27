import * as Yup from "yup";
import { LoginTypes } from "../types/credentials";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../constant/regex";

export const adminLogInValidationSchema: Yup.ObjectSchema<LoginTypes> =
  Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field!")
      .matches(EMAIL_REGEX, "Invalid email format"),
    password: Yup.string()
      .required("Password is a required field!")
      .matches(
        PASSWORD_REGEX,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
  });
