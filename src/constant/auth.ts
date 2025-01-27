import {
  LoginTypes,
  RegistrationTypes,
  VerifyEmailTypes,
} from "../types/credentials";

export const BACKEND_BASE_URL = `https://techerudite-backend-x5di.onrender.com`;

export const emailVerifyValue: VerifyEmailTypes = {
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
};

export const PAGE_SIZE_OPTIONS = [5, 10];
