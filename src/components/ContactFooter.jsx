import { Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import TextFieldWrapper from "./FormComponents/TextFieldWrapper";
import * as Yup from "yup";

const ContactFooter = () => {
  return (
    <Stack>
      <Stack direction="row" paddingX={2}>
        <Stack
          width="50%"
          border={1}
          borderColor="lightgray"
          paddingX={2}
          pb={2}
          spacing={2}
          sx={{ backgroundColor: "background.paper" }}
        >
          <Typography textAlign="center" fontSize={25} fontWeight="bolder">
            Get In Touch With Us
          </Typography>
          <Divider />

          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              contact: "",
              email: "",
              message: ""
            }}
            validationSchema={Yup.object().shape({
              firstname: Yup.string().required("Please provide firstname"),
              lastname: Yup.string().required("Please provide lastname"),
              contact: Yup.string().required("Please provide contact"),
              email: Yup.string().required("Please provide email"),
              message: Yup.string().required("Please provide message")
            })}
          >
            {(values) => {
              return (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                      <TextFieldWrapper name="firstname" label="FirstName" />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <TextFieldWrapper name="lastname" label="LastName" />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <TextFieldWrapper name="contact" label="Contact Number" />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <TextFieldWrapper name="email" label="Email" />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <TextFieldWrapper
                        name="message"
                        label="Message..."
                        multiline
                        rows={4}
                      />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Button variant="contained" fullWidth type="submit">
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              );
            }}
          </Formik>
        </Stack>
        <Stack
          width="50%"
          direction="row"
          justifyContent="center"
          alignItems="center"
          padding={2}
          border={1}
          borderColor="lightgray"
        >
          <Typography fontSize={40} textAlign="center">
            Display Company Location In A Map Here
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ContactFooter;
