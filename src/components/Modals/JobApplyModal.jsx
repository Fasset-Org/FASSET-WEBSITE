import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  // useMediaQuery,
} from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import TextFieldWrapper from "../FormComponents/TextFieldWrapper";
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
            }}
          >
            {(values) => {
              return (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12} mt={2}>
                      <TextFieldWrapper name="firstname" label="FirstName" />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <TextFieldWrapper name="firstname" label="FirstName" />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <TextFieldWrapper name="firstname" label="FirstName" />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <TextFieldWrapper name="firstname" label="FirstName" />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <TextFieldWrapper name="firstname" label="FirstName" />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <TextFieldWrapper name="firstname" label="FirstName" />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <TextFieldWrapper name="firstname" label="FirstName" />
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
