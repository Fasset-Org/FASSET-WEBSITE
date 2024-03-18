import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { Fragment } from "react";
import TextFieldWrapper from "../FormComponents/TextFieldWrapper";
import SelectFieldWrapper from "../FormComponents/SelectFieldWrapper";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import UserQuery from "../../stateQueries/User";
import AlertPopup from "../AlertPopup";
import CloseIcon from "@mui/icons-material/Close";

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

  const { mutate, isError, isSuccess, data, error } = useMutation({
    mutationFn: async (formData) => {
      return await UserQuery.jobApplication(formData);
    },
    onSuccess: (data) => {
      console.log(data);
    }
  });

  const yesNoOptions = [
    {
      value: "Yes",
      label: "Yes"
    },
    {
      value: "No",
      label: "No"
    }
  ];

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

  const raceOptions = [
    {
      value: "Black",
      label: "Black"
    },
    {
      value: "White",
      label: "White"
    },
    {
      value: "Coloured",
      label: "Coloured"
    },
    {
      value: "Indian",
      label: "Indian"
    }
  ];

  let addionalQuestionNames = {};
  let addionalQuestionNamesValidation = {};

  if (position?.PositionQuestions?.length > 0) {
    for (const positionQuestion of position?.PositionQuestions) {
      Object.assign(addionalQuestionNames, { [positionQuestion.id]: "" });
      Object.assign(addionalQuestionNamesValidation, {
        [positionQuestion.id]: Yup.string().required("Please provide an answer")
      });
    }
  }

  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle
        sx={{
          m: 0,
          p: 2,
          fontWeight: "bolder",
          backgroundColor: "primary.main",
          color: "#FFFFFF"
        }}
        {...other}
      >
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500]
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }

  return (
    <Box>
      <Button variant="contained" onClick={handleClickOpen} fullWidth>
        Apply Now
      </Button>
      {isError && (
        <AlertPopup
          open={true}
          severity="error"
          message={error?.response?.data?.message || "Server Error"}
        />
      )}
      {isSuccess && <AlertPopup open={true} message={data?.message} />}
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen={fullScreen}
        fullWidth
        sx={{ width: "100%" }}
      >
        <BootstrapDialogTitle>{position.jobTitle}</BootstrapDialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
              positionId: position.id || "",
              jobTitle: position?.jobTitle || "",
              firstName: "",
              lastName: "",
              email: "",
              nationality: "",
              race: "",
              rsaId: "",
              idNumber: "",
              passportNumber: "",
              gender: "",
              cellphone: "",
              ...addionalQuestionNames,
              resumeDocumentName: null,
              idDocumentName: null,
              matricDocumentName: null,
              qualificationDocumentName: null
            }}
            validationSchema={Yup.object().shape({
              firstName: Yup.string().required("First name required"),
              lastName: Yup.string().required("Last name required"),
              email: Yup.string().required("Email required"),
              nationality: Yup.string().required("Nationality required"),
              race: Yup.string().required("Race required"),
              rsaId: Yup.string().required("Please select"),
              idNumber: Yup.string().when("rsaId", {
                is: "Yes",
                then: () => Yup.string().required("ID number required")
              }),
              passportNumber: Yup.string().when("rsaId", {
                is: "No",
                then: () => Yup.string().required("Passport number required")
              }),
              gender: Yup.string().required("Gender required"),
              cellphone: Yup.string().required("Cellphone required"),
              ...addionalQuestionNamesValidation,
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
            onSubmit={(values) => {
              const formData = new FormData();
              for (const [key, value] of Object.entries(values)) {
                formData.append(key, value);
              }

              mutate(formData);
            }}
          >
            {({ values, setFieldValue, getFieldMeta }) => {
              console.log(values);
              return (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                      <Typography
                        sx={{ fontSize: 15, fontWeight: "bolder", mt: 2 }}
                      >
                        Personal Information
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <TextFieldWrapper
                        name="firstName"
                        label="First Name(s)"
                      />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <TextFieldWrapper name="lastName" label="Last Name" />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <TextFieldWrapper name="email" label="Email" />
                    </Grid>

                    <Grid item xs={12} md={12}>
                      <SelectFieldWrapper
                        name="rsaId"
                        label="Do you have RSA ID number?"
                        options={yesNoOptions}
                      />
                    </Grid>
                    {values.rsaId === "Yes" ? (
                      <Grid item xs={12} md={12}>
                        <TextFieldWrapper name="idNumber" label="Id Number" />
                      </Grid>
                    ) : values.rsaId === "No" ? (
                      <Grid item xs={12} md={12}>
                        <TextFieldWrapper
                          name="passportNumber"
                          label="Passport Number"
                        />
                      </Grid>
                    ) : (
                      ""
                    )}

                    <Grid item xs={12} md={12}>
                      <TextFieldWrapper
                        name="nationality"
                        label="Nationality"
                      />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <SelectFieldWrapper
                        name="race"
                        label="Race"
                        options={raceOptions}
                      />
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
                      <Typography sx={{ fontSize: 15, fontWeight: "bolder" }}>
                        Additional Questions
                      </Typography>
                    </Grid>

                    {position?.PositionQuestions?.length > 0 &&
                      position?.PositionQuestions?.map(
                        (positionQuestion, i) => {
                          // console.log(positionQuestion);
                          return (
                            <Fragment key={positionQuestion.id}>
                              {positionQuestion.type === "numeric" ? (
                                <Grid item xs={12} md={12} key={i}>
                                  <TextFieldWrapper
                                    name={`${positionQuestion.id}`}
                                    label={positionQuestion.question}
                                    type="number"
                                    fullWidth
                                    // required
                                  />
                                </Grid>
                              ) : positionQuestion.type === "yes/no" ? (
                                <Grid
                                  item
                                  xs={12}
                                  md={12}
                                  key={positionQuestion.id}
                                >
                                  <FormControl>
                                    <FormLabel id="demo-controlled-radio-buttons-group">
                                      {positionQuestion.question}
                                    </FormLabel>
                                    <RadioGroup
                                      name={positionQuestion.id}
                                      value={values[positionQuestion.id]}
                                      onChange={(e) => {
                                        console.log(e.target.value);
                                        setFieldValue(
                                          positionQuestion.id,
                                          e.target.value
                                        );
                                      }}
                                    >
                                      <FormControlLabel
                                        value="yes"
                                        control={<Radio />}
                                        label="Yes"
                                      />
                                      <FormControlLabel
                                        value="no"
                                        control={<Radio />}
                                        label="No"
                                      />
                                    </RadioGroup>
                                    {/* {getFieldMeta(positionQuestion.id)
                                      .touched &&
                                      getFieldMeta(positionQuestion.id)
                                        .error && (
                                        <FormHelperText
                                          error={true}
                                          content={
                                            getFieldMeta(positionQuestion.id)
                                              .error
                                          }
                                        />
                                      )} */}
                                  </FormControl>
                                </Grid>
                              ) : (
                                <Fragment key={positionQuestion.id}>
                                  <Grid item xs={12} md={12}>
                                    <TextFieldWrapper
                                      name={`${positionQuestion.id}`}
                                      label={positionQuestion.question}
                                      fullWidth
                                      // required
                                    />
                                  </Grid>
                                </Fragment>
                              )}
                            </Fragment>
                          );
                        }
                      )}

                    <Grid item xs={12} md={12}>
                      <Typography sx={{ fontSize: 15, fontWeight: "bolder" }}>
                        Required Documents
                      </Typography>
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

                    <Grid item xs={12} md={12}>
                      <Stack spacing={2} direction="row" justifyContent="end">
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
