import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { CustomTextField } from "./CustomText";
import { Formik, Form } from "formik";
import { emailVerifyValue } from "../constant/auth";
import { tokenInValidationSchema } from "../validations/email";
import { ROLES, VerifyEmailTypes } from "../types/credentials";
import { verifyEmail } from "../services/authService";
import { VERIFY_EMAIL_SUCCESS } from "../constant/messages";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../constant/routes";
import { showErrorToast, showSuccessToast } from "../utils/toast";

const EmailVerification = () => {
  const navigate = useNavigate();

  const handleSubmit = async (token: VerifyEmailTypes) => {
    try {
      const { user } = await verifyEmail(token);

      if (user.role === ROLES.CUSTOMER) {
        showSuccessToast(` ${user.email} ${VERIFY_EMAIL_SUCCESS}`);
        navigate(PATHS.thankYou);

        return;
      }

      showSuccessToast(` ${user.email} ${VERIFY_EMAIL_SUCCESS}`);
      navigate(PATHS.login);

      return user;
    } catch (error) {
      console.error(error);
      showErrorToast();
    }
  };

  return (
    <Container maxWidth="lg">
      <Formik
        initialValues={emailVerifyValue}
        validationSchema={tokenInValidationSchema}
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
                  Verify Email
                </Typography>
                <Typography
                  gutterBottom
                  variant="subtitle2"
                  component="span"
                  style={{ color: "grey" }}
                >
                  Verification mail has been sent to your email address!
                </Typography>{" "}
                <CustomTextField name="token" label="Token" />
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
                  Verify
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Form>
      </Formik>
    </Container>
  );
};

export default EmailVerification;
