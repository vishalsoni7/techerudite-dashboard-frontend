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
}

export interface RegistrationResponseTypes extends RegistrationTypes {
  _id?: string;
}

export interface VerifyEmailTypes {
  token: string;
}
