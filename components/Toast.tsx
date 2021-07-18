import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import React, { useEffect } from "react";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

interface ComponentProps {
  isVisible: boolean;
  data: any;
}

export default function MyToast(props: ComponentProps) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const vertical = "top";
  const horizontal = "right";

  useEffect(() => {
    console.log(props);

    if (props.isVisible === true) {
      setOpen(true);
    }
  }, [props.isVisible]);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="error">
          {props.data}
        </Alert>
      </Snackbar>
    </div>
  );
}
