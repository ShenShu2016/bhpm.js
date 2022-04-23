import { useDispatch, useSelector } from "react-redux";
import { removeAlert } from "../redux/slice/generalSlice";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import { Collapse } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
const AlertTool = () => {
  const alert = useSelector((state) => state.general.alert);
  const dispatch = useDispatch();
  const closeAlert = async () => {
    if (alert === true) {
      dispatch(removeAlert()); 
    }
  };
  console.log("alertopen: ", alert);
  return (
    <Stack>
      <Collapse in={alert}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                closeAlert();
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>
      </Collapse>
    </Stack>
  );
};

export default AlertTool;
