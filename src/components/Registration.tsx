import { Box, Button, Container, Typography } from "@mui/material";
import { registration } from "../services/authService";
import { Form, Formik } from "formik";
import { RegistrationTypes } from "../types/credentials";
import { CustomTextField } from "./CustomText";
import { registrationInitialValues } from "../constant/auth";
import { registrationValidationSchema } from "../validations/registration";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PATHS } from "../constant/routes";
import { showErrorToast, showSuccessToast } from "../utils/toast";
import { VERIFY_EMAIL } from "../constant/messages";

const Registration = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [lastPathSegment, setLastPathSegment] = useState<string | undefined>();

  const handleSubmit = async (formData: RegistrationTypes) => {
    try {
      const { newUser } = await registration({
        ...formData,
        role: lastPathSegment || "",
      });

      if (newUser) {
        showSuccessToast(`Registered successfully, ${VERIFY_EMAIL}`);
        navigate(PATHS.verifyEmail);

        return newUser;
      }
    } catch (error) {
      console.error(error);
      showErrorToast();
    }
  };

  const initialValues = {
    ...registrationInitialValues,
    role: lastPathSegment || "",
  };

  const formTitle = lastPathSegment
    ? lastPathSegment.charAt(0).toUpperCase() + lastPathSegment.slice(1)
    : "";

  useEffect(() => {
    const currentPath = location.pathname;
    localStorage.setItem("previousPath", currentPath);
    const segment = currentPath.split("/").pop();
    setLastPathSegment(segment);

    return () => {
      setLastPathSegment(undefined);
    };
  }, [location]);

  return (
    <Container
      sx={{
        marginTop: 3,
        marginBottom: 3,
        background: "white",
        boxShadow:
          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={registrationValidationSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        <Form>
          <Box
            sx={{
              padding: 2,
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontWeight={700}
              textAlign="center"
              p={2}
            >
              {formTitle} Register
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                gap: 2,
                marginBottom: 2,
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <CustomTextField name="firstName" label="First Name" />
              <CustomTextField name="lastName" label="Last Name" />{" "}
              <CustomTextField name="role" label="Role" />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                gap: 2,
                marginBottom: 2,
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <CustomTextField name="email" label="Email" />
              <CustomTextField name="password" label="Password" />
            </Box>

            <Button
              fullWidth
              size="large"
              variant="contained"
              sx={{
                width: { xs: "100%", sm: "auto" },
                background:
                  "linear-gradient(132.18deg, #EF8431 -35.03%, #E71A86 88.97%)",
                borderRadius: 0,
              }}
              type="submit"
            >
              Create New {formTitle}
            </Button>
          </Box>
        </Form>
      </Formik>
    </Container>
  );
};

export default Registration;
