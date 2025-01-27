export interface LoginTypes {
  email: string;
  password: string;
}

export interface RegistrationTypes {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  _id?: string;
}

export interface VerifyEmailTypes {
  token: string;
}
