import {
  LoginTypes,
  RegistrationTypes,
  VerifyEmail,
} from "../types/credentials";

export const BACKEND_BASE_URL = `http://localhost:3001`;

export const emailVerifyValue: VerifyEmail = {
  token: "",
};

export const adminLoginInitialValues: LoginTypes = {
  email: "",
  password: "",
};

export const registrationInitialValues: RegistrationTypes = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  role: "",
  // _id: "",
};

export const PAGE_SIZE_OPTIONS = [5, 10];
