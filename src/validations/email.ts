import * as Yup from "yup";
import { VerifyEmail } from "../types/credentials";

export const tokenInValidationSchema: Yup.ObjectSchema<VerifyEmail> =
  Yup.object().shape({
    token: Yup.string().required("Token is a required field!"),
  });
