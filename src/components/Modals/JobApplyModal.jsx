import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Stack,
  TextField,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import TextFieldWrapper from "../FormComponents/TextFieldWrapper";
import SelectFieldWrapper from "../FormComponents/SelectFieldWrapper";
import * as Yup from "yup";

const JobApplyModal = ({ position }) => {
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const genderOptions = [
    {
      value: "Male",
      label: "Male"
    },
    {
      value: "Female",
      label: "Female"
    }
  ];

  console.log(position);

  return (
    <Box>
      <Button variant="contained" onClick={handleClickOpen} fullWidth>
        Apply Now
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen={fullScreen}
        fullWidth
        sx={{ width: "100%" }}
      >
        <DialogTitle>{position.jobTitle}</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
              positionId: position.id || "",
              fullname: "",
              email: "",
              nationality: "",
              idNumber: "",
              gender: "",
              cellphone: "",
              resumeDocumentName: null,
              idDocumentName: null,
              matricDocumentName: null,
              qualificationDocumentName: null
            }}
            validationSchema={Yup.object().shape({
              fullname: Yup.string().required("Fullname required"),
              email: Yup.string().required("Email required"),
              nationality: Yup.string().required("Nationality required"),
              idNumber: Yup.string().required("ID number required"),
              gender: Yup.string().required("Gender required"),
              cellphone: Yup.string().required("Cellphone required"),
              resumeDocumentName: Yup.string().required(
                "Please upload your resume"
              ),
              idDocumentName: Yup.string().required(
                "Please upload your id/passport"
              ),
              matricDocumentName: Yup.string().required(
                "Please upload your matric certficate"
              ),
              qualificationDocumentName: Yup.string().required(
                "Please upload your qualification"
              )
            })}
            onSubmit={(values) => {}}
          >
            {({ values, setFieldValue }) => {
              return (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12} mt={2}>
                      <TextFieldWrapper name="fullname" label="Fullname" />
                    </Grid>
                    <Grid item xs={12} md={12} mt={2}>
                      <TextFieldWrapper name="email" label="Email" />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <TextFieldWrapper
                        name="nationality"
                        label="Nationality"
                      />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <TextFieldWrapper name="idNumber" label="Id Number" />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <SelectFieldWrapper
                        name="gender"
                        label="Gender"
                        options={genderOptions}
                      />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <TextFieldWrapper name="cellphone" label="Cellphone" />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Field name="idDocumentName">
                        {({ field, form, meta }) => (
                          <TextField
                            type="file"
                            label="Upload ID"
                            InputLabelProps={{
                              shrink: true
                            }}
                            error={meta.touched && meta.error}
                            helperText={
                              meta.touched && meta.error && meta.error
                            }
                            fullWidth
                            onChange={(event) => {
                              form.setFieldValue(
                                field.name,
                                event.currentTarget.files[0]
                              );
                            }}
                          />
                        )}
                      </Field>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Field name="resumeDocumentName">
                        {({ field, form, meta }) => (
                          <TextField
                            type="file"
                            label="Upload Resume"
                            InputLabelProps={{
                              shrink: true
                            }}
                            error={meta.touched && meta.error}
                            helperText={
                              meta.touched && meta.error && meta.error
                            }
                            fullWidth
                            onChange={(event) => {
                              form.setFieldValue(
                                field.name,
                                event.currentTarget.files[0]
                              );
                            }}
                          />
                        )}
                      </Field>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Field name="matricDocumentName">
                        {({ field, form, meta }) => (
                          <TextField
                            type="file"
                            label="Upload Matric"
                            InputLabelProps={{
                              shrink: true
                            }}
                            error={meta.touched && meta.error}
                            helperText={
                              meta.touched && meta.error && meta.error
                            }
                            fullWidth
                            onChange={(event) => {
                              form.setFieldValue(
                                field.name,
                                event.currentTarget.files[0]
                              );
                            }}
                          />
                        )}
                      </Field>
                    </Grid>

                    {position?.PositionQualifications?.length > 0 && (
                      <Grid item xs={12} md={12}>
                        <Field name="qualificationDocumentName">
                          {({ field, form, meta }) => (
                            <TextField
                              type="file"
                              label="Upload Qualification"
                              InputLabelProps={{
                                shrink: true
                              }}
                              error={meta.touched && meta.error}
                              helperText={
                                meta.touched && meta.error && meta.error
                              }
                              fullWidth
                              onChange={(event) => {
                                form.setFieldValue(
                                  field.name,
                                  event.currentTarget.files[0]
                                );
                              }}
                            />
                          )}
                        </Field>
                      </Grid>
                    )}
                    {/* {position?.PositionQuestions?.length > 0 &&
                      position?.PositionQuestions?.map(
                        (positionQuestion, i) => {
                          return (
                            <Grid item xs={12} md={12}>
                              <Typography sx={{ fontSize: 12, mb: 1 }}>
                                {positionQuestion.question} ?
                              </Typography>
                              <TextField
                                name={`question${i}`}
                                label="Answer"
                                fullWidth
                                required
                              />
                            </Grid>
                          );
                        }
                      )} */}

                    <Grid item xs={12} md={12}>
                      <Stack spacing={2} direction="row" justifyContent='end'>
                        <Button
                          onClick={handleClose}
                          color="error"
                          variant="contained"
                        >
                          Cancel
                        </Button>
                        <Button type="submit" variant="contained">
                          Submit Application
                        </Button>
                      </Stack>
                    </Grid>
                  </Grid>
                </Form>
              );
            }}
          </Formik>
        </DialogContent>
        {/* <DialogActions sx={{ px: 3 }}>
          <Button onClick={handleClose} color="error" variant="contained">
            Cancel
          </Button>
          <Button type="submit" variant="contained">
            Submit Application
          </Button>
        </DialogActions> */}
      </Dialog>
    </Box>
  );
};

export default JobApplyModal;
