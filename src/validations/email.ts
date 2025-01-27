import * as Yup from "yup";
import { VerifyEmailTypes } from "../types/credentials";

export const tokenInValidationSchema: Yup.ObjectSchema<VerifyEmailTypes> =
  Yup.object().shape({
    token: Yup.string().required("Token is a required field!"),
  });
