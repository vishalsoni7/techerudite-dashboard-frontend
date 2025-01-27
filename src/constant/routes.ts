export enum PATHS {
  login = `/`,
  customerRegistration = `/register/customer`,
  adminRegistration = `/register/admin`,
  allCustomers = `/all-customers`,
  verifyEmail = `/verify-email`,
  thankYou = `/thank-you`,
}

export interface NavBarOptions {
  text: string;
  route: string;
}

export const navBarOptions: NavBarOptions[] = [
  {
    text: "Log in",
    route: PATHS.login,
  },
  {
    text: "Customer Registration",
    route: PATHS.customerRegistration,
  },
  {
    text: "Admin Registration",
    route: PATHS.adminRegistration,
  },
];
