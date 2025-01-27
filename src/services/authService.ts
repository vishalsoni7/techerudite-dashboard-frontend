import axios from "axios";
import { BACKEND_BASE_URL } from "../constant/auth";
import {
  LoginTypes,
  RegistrationTypes,
  VerifyEmailTypes,
} from "../types/credentials";
import { SOMETHING_WENT_WRONG } from "../constant/messages";

export const getAllCustomers = async (page: number, limit: number) => {
  try {
    const { data } = await axios.get(
      `${BACKEND_BASE_URL}/all-customers?page=${page}&limit=${limit}`
    );

    return data;
  } catch {
    console.error(SOMETHING_WENT_WRONG);
  }
};

export const adminLogin = async (userData: LoginTypes) => {
  try {
    const { data } = await axios.post(`${BACKEND_BASE_URL}/login`, userData);

    if (data) {
      localStorage.setItem("userDetails", JSON.stringify(data));
    }

    return data;
  } catch {
    console.error(SOMETHING_WENT_WRONG);
  }
};

export const adminLogout = () => {
  localStorage.removeItem("userDetails");

  return null;
};

export const registration = async (userData: RegistrationTypes) => {
  try {
    const { data } = await axios.post(`${BACKEND_BASE_URL}/register`, userData);

    return data;
  } catch {
    console.error(SOMETHING_WENT_WRONG);
  }
};

export const verifyEmail = async (token: VerifyEmailTypes) => {
  try {
    const { data } = await axios.post(
      `${BACKEND_BASE_URL}/verify-email`,
      token
    );

    return data;
  } catch {
    console.error(SOMETHING_WENT_WRONG);
  }
};
