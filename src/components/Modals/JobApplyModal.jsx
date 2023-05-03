import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  InputLabel,
  TextField
  // useMediaQuery,
} from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import TextFieldWrapper from "../FormComponents/TextFieldWrapper";
import SelectFieldWrapper from "../FormComponents/SelectFieldWrapper";
// import { useTheme } from "styled-components";

const JobApplyModal = () => {
  const [open, setOpen] = React.useState(false);

  // const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

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

  return (
    <Box>
      <Button variant="contained" onClick={handleClickOpen}>
        Apply Now
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        // fullScreen={fullScreen}
        fullWidth
        sx={{ width: "100%" }}
      >
        <DialogTitle>Apply Job Title</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
              firstname: "",
              fullname: "",
              nationality: "",
              idNumber: "",
              gender: "",
              cellphone: ""
            }}
          >
            {(values) => {
              return (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12} mt={2}>
                      <TextFieldWrapper name="fullname" label="Fullname" />
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
                      <InputLabel>Id copy</InputLabel>
                      <TextField name="idCopy" type="file" fullWidth />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <InputLabel>Resume</InputLabel>
                      <TextField name="resume" type="file" fullWidth />
                    </Grid>
                  </Grid>
                </Form>
              );
            }}
          </Formik>
        </DialogContent>
        <DialogActions sx={{ px: 3 }}>
          <Button onClick={handleClose} color="error" variant="contained">
            Cancel
          </Button>
          <Button onClick={handleClose} autoFocus variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default JobApplyModal;
