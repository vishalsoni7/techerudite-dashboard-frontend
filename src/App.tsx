import "./App.css";
import { Route, Routes } from "react-router-dom";
import Registration from "./components/Registration";
import Header from "./components/Navbar";
import AdminLogin from "./components/AdminLogin";
import { PATHS } from "./constant/routes";
import AllCustomers from "./components/AllCustomers";
import { Toaster } from "react-hot-toast";
import EmailVerification from "./components/EmailVerification";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={PATHS.login} element={<AdminLogin />} />{" "}
        <Route path={PATHS.verifyEmail} element={<EmailVerification />} />
        <Route path={PATHS.allCustomers} element={<AllCustomers />} />
        <Route path={PATHS.adminRegistration} element={<Registration />} />
        <Route path={PATHS.customerRegistration} element={<Registration />} />
        <Route path={PATHS.thankYou} element={<ThankYou />} />
      </Routes>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
}

export default App;
