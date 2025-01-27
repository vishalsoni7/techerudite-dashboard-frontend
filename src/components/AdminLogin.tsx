import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { adminLogin } from "../services/authService";
import { Form, Formik } from "formik";
import { LoginTypes } from "../types/credentials";
import { adminLogInValidationSchema } from "../validations/login";
import { CustomTextField } from "./CustomText";
import { adminLoginInitialValues } from "../constant/auth";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../constant/routes";
import { LOGIN_SUCCESS } from "../constant/messages";
import { showErrorToast, showSuccessToast } from "../utils/toast";

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = async (formData: LoginTypes) => {
    try {
      const response = await adminLogin(formData);

      console.log(response);

      if (response) {
        showSuccessToast(LOGIN_SUCCESS);
        navigate(PATHS.allCustomers);
      }

      return response;
    } catch (error) {
      console.error(error);
      showErrorToast();
    }
  };

  return (
    <Container maxWidth="lg">
      <Formik
        initialValues={adminLoginInitialValues}
        validationSchema={adminLogInValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Box
            sx={{
              width: "100%",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                width: 500,
                padding: 2,
                borderRadius: 0,
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  fontWeight={700}
                >
                  Admin Login
                </Typography>

                <CustomTextField name="email" label="Email" />
                <CustomTextField name="password" label="Password" />
              </CardContent>

              <CardActions
                sx={{ display: "flex", flexDirection: "column", flex: 1 }}
              >
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  type="submit"
                  sx={{
                    background:
                      "linear-gradient(132.18deg, #EF8431 -35.03%, #E71A86 88.97%)",
                    borderRadius: 0,
                  }}
                >
                  Login
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Form>
      </Formik>
    </Container>
  );
};

export default AdminLogin;
