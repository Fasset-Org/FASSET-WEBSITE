import {
  Alert,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  InputLabel,
  LinearProgress,
  Stack,
  Typography
} from "@mui/material";
import React from "react";
import whiteLogo from "../../../images/white_logo.png";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import TextFieldWrapper from "../../../components/FormComponents/TextFieldWrapper";
import { useMutation } from "@tanstack/react-query";
import AuthQuery from "../../../stateQueries/Auth";
import { Navigate, } from "react-router-dom";


const LoginUser = () => {

  const userInfo = localStorage.getItem("user");

  const { mutate, isLoading, error } = useMutation({
    mutationFn: (formData) => {
      return AuthQuery.loginUser(formData);
    },
    onSuccess: (data) => {
      localStorage.setItem("user", JSON.stringify(data?.user));
    },
    onError: (error) => {
      console.log(error);
    }
  });

  if (userInfo) {
    return <Navigate to='/fms/dashboard' />
  } else {
    return (
      <Stack>
        {isLoading && <LinearProgress />}
        <Stack
          height={300}
          sx={{ backgroundColor: "primary.main" }}
          alignItems="center"
          padding={2}
        >
          <img src={whiteLogo} alt="" height="50%" width="12%" />
        </Stack>
        <Stack justifyContent="center" alignItems="center">
          <Card
            component={Stack}
            padding={2}
            py={4}
            width="35%"
            justifyContent="center"
            alignItems="center"
            sx={{ position: "relative", bottom: 100 }}
          >
            {error?.response?.status === 404 && (
              <Alert color="error" sx={{ width: "100%" }}>
                {error.response.data.message}
              </Alert>
            )}

            <Typography fontSize={20}>Welcome back</Typography>
            <Typography fontWeight="bolder" sx={{ color: "lightgray" }}>
              Sign in to continue to FMS
            </Typography>

            <Formik
              initialValues={{
                email: "",
                password: ""
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string().required("Please provide email"),
                password: Yup.string().required("Please provide password")
              })}
              onSubmit={(values) => {
                mutate(values);
              }}
            >
              {() => {
                return (
                  <Form>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={12}>
                        <InputLabel>Email/UserName</InputLabel>
                        <TextFieldWrapper
                          name="email"
                          label="Email/UserName"
                          sx={{ mt: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <Stack direction="row" justifyContent="space-between">
                          <InputLabel>Password</InputLabel>
                          <Typography
                            sx={{
                              fontWeight: "bolder",
                              color: "primary.main",
                              cursor: "pointer"
                            }}
                          >
                            Forgot Password?
                          </Typography>
                        </Stack>
                        <TextFieldWrapper
                          name="password"
                          label="Password"
                          sx={{ mt: 2 }}
                          type="password"
                        />
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Remember Me"
                        />
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <Button
                          variant="contained"
                          fullWidth
                          type="submit"
                          // onClick={(e) => navigate("/fms/dashboard")}
                        >
                          Login
                        </Button>
                      </Grid>
                    </Grid>
                  </Form>
                );
              }}
            </Formik>
          </Card>
        </Stack>
      </Stack>
    );
  }
};

export default LoginUser;
