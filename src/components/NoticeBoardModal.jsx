import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Paper, Slide, Stack, Typography, useMediaQuery } from "@mui/material";
import WindowCountDown from "./WindowCountDown";
import { useQuery } from "@tanstack/react-query";
import UserQuery from "../stateQueries/User";

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2, fontWeight: "bolder", backgroundColor: 'primary.main', color: '#FFFFFF' }} {...other}>
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

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} timeout={1000} />;
});

export default function NoticeBoardModal() {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const noticesQuery = useQuery({
    queryKey: ["notices"],
    queryFn: async () => {
      return await UserQuery.getAllGeneralNotices();
    }
  });
  const grantsWindowQuery = useQuery({
    queryKey: ["grantsWindow"],
    queryFn: async () => {
      return await UserQuery.getAllGrantsWindows();
    }
  });

  console.log(noticesQuery);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullScreen={fullScreen}
      TransitionComponent={Transition}
      fullWidth
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        Notice Board
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <Stack spacing={2}>
          {grantsWindowQuery?.data?.grants?.length > 0 &&
            grantsWindowQuery?.data?.grants?.map((grant) => {
              return <WindowCountDown grant={grant} />;
            })}

          <Typography fontSize={20} fontWeight="bolder">
            Latest News
          </Typography>
          {noticesQuery.data?.notices?.length > 0 &&
            noticesQuery.data?.notices?.map((notice) => {
              return (
                <Stack width="100%" spacing={1} component={Paper} padding={2}>
                  <Typography
                    sx={
                      {
                        // overflow: "hidden",
                        // whiteSpace: "nowrap",
                        // textOverflow: "ellipsis",
                        // width: 500
                      }
                    }
                    dangerouslySetInnerHTML={{ __html: notice.content }}
                  ></Typography>
                </Stack>
              );
            })}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
