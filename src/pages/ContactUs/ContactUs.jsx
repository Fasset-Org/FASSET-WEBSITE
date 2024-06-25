import {
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography
} from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import TextFieldWrapper from "../../components/FormComponents/TextFieldWrapper";

const ContactUs = () => {
  return (
    <Container>
      <Grid container paddingY={2}>
        <Grid item xs={12} sm={12} md={12}>
          <Stack justifyContent="center" alignItems="center" direction="column">
            <Divider>
              <Typography
                fontSize={40}
                fontWeight="bolder"
                textTransform="uppercase"
              >
                Contact Us
              </Typography>
            </Divider>

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
                    <Grid
                      container
                      spacing={2}
                      sx={{ width: "50%", margin: "auto" }}
                    >
                      <Grid item xs={12} md={12}>
                        <TextFieldWrapper name="firstname" label="FirstName" />
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextFieldWrapper name="lastname" label="LastName" />
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextFieldWrapper
                          name="contact"
                          label="Contact Number"
                        />
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
