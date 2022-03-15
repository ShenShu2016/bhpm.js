//import * as yup from "yup";

import { Alert, Box, Card, CircularProgress, IconButton } from "@mui/material";
import { H3, H6, Small } from "../Typography";
import { Link, useNavigate } from "react-router-dom";
import React, { useCallback, useRef, useState } from "react";

import BazarButton from "../BazarButton";
import BazarTextField from "../BazarTextField";
import FlexBox from "../FlexBox";
//import Image from "../BazarImage";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { signIn } from "../../redux/slice/authSlice";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";

const useStyles = makeStyles(() => ({
  alert: {
    marginTop: "1.5rem",
  },
}));
const StyledCard = styled(({ children, passwordVisibility, ...rest }) => (
  <Card {...rest}>{children}</Card>
))(({ theme, passwordVisibility }) => ({
  width: 500,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  ".content": {
    textAlign: "center",
    padding: "3rem 3.75rem 0px",
    [theme.breakpoints.down("xs")]: {
      padding: "1.5rem 1rem 0px",
    },
  },
  ".passwordEye": {
    color: passwordVisibility
      ? theme.palette.grey[600]
      : theme.palette.grey[400],
  },

  ".agreement": {
    marginTop: 12,
    marginBottom: 24,
  },
}));

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [loading, setLoading] = useState(false);
  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility((visible) => !visible);
  }, []);
  const timer = useRef();
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const handleFormSubmit = async (values) => {
    // try {
    //   const { data } = await axios.post(`${SERVER_URL}/auth/login`, values); // router.push("/profile");
    //   console.log(data);
    // } catch (error) {
    //   console.log(error.response.data.message);
    // }
    setLoading(true);
    console.log(values, "values");
    const response = await dispatch(signIn(values));
    console.log(response);
    if (response.meta.requestStatus === "fulfilled") {
      setLoading(false);
      navigate("/", { replace: true });
    } else {
      timer.current = window.setTimeout(() => {
        setLoading(false);
        setAlertContent(response.error.message);
        setAlert(true);
        console.log(response.error.message);
      }, 1000);
      console.log(response.error.message);
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      onSubmit: handleFormSubmit,
      initialValues,
      //validationSchema: formSchema,
    });
  return (
    <StyledCard elevation={3} passwordVisibility={passwordVisibility}>
      <form className="content" onSubmit={handleSubmit}>
        <H3 textAlign="center" mb={1}>
          宝华 登录
        </H3>
        <Small
          fontWeight="600"
          fontSize="12px"
          color="grey.800"
          textAlign="center"
          mb={4.5}
          display="block"
        >
          Log in with email & password
        </Small>
        {alert ? (
          <Alert className={classes.alert} severity="error">
            {alertContent}
          </Alert>
        ) : (
          <></>
        )}
        <BazarTextField
          mb={1.5}
          name="email"
          label="Email"
          placeholder="exmple@mail.com"
          variant="outlined"
          size="small"
          type="email"
          fullWidth
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email || ""}
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
        />

        <BazarTextField
          mb={2}
          name="password"
          label="Password"
          placeholder="*********"
          autoComplete="on"
          type={passwordVisibility ? "text" : "password"}
          variant="outlined"
          size="small"
          fullWidth
          InputProps={{
            endAdornment: (
              <IconButton
                size="small"
                type="button"
                onClick={togglePasswordVisibility}
              >
                {passwordVisibility ? (
                  <Visibility className="passwordEye" fontSize="small" />
                ) : (
                  <VisibilityOff className="passwordEye" fontSize="small" />
                )}
              </IconButton>
            ),
          }}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password || ""}
          error={!!touched.password && !!errors.password}
          helperText={touched.password && errors.password}
        />

        <BazarButton
          variant="contained"
          color="primary"
          type="submit"
          disabled={loading}
          fullWidth
          sx={{
            mb: "1.65rem",
            height: 44,
          }}
        >
          Login{" "}
          {loading && (
            <CircularProgress
              size={24}
              sx={{
                color: green[500],
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-0.75rem",
                marginLeft: "-0.75rem",
              }}
            />
          )}
        </BazarButton>

        {/* <Box mb={2}>
          <Box width="200px" mx="auto">
            <Divider />
          </Box>

          <FlexBox justifyContent="center" mt={-1.625}>
            <Box color="grey.600" bgcolor="background.paper" px={2}>
              on
            </Box>
          </FlexBox>
        </Box> */}

        {/* <BazarButton
          className="facebookButton"
          size="medium"
          fullWidth
          sx={{
            mb: "10px",
            height: 44,
          }}
        >
          <Image
            src="/assets/images/icons/facebook-filled-white.svg"
            alt="facebook"
          />
          <Box fontSize="12px" ml={1}>
            Continue with Facebook
          </Box>
        </BazarButton>
        <BazarButton
          className="googleButton"
          size="medium"
          fullWidth
          sx={{
            height: 44,
          }}
        >
          <Image src="/assets/images/icons/google-1.svg" alt="facebook" />
          <Box fontSize="12px" ml={1}>
            Continue with Google
          </Box>
        </BazarButton> */}

        <FlexBox justifyContent="center" alignItems="center" my="1.25rem">
          <Box>Don’t have account?</Box>
          <Link to="/auth/signUp">
            <H6 ml={1} borderBottom="1px solid" borderColor="grey.900">
              Sign Up
            </H6>
          </Link>
        </FlexBox>
      </form>

      {/* <FlexBox justifyContent="center" bgcolor="grey.200" py={2.5}>
        Forgot your password?
        <Link to="/">
          <H6 ml={1} borderBottom="1px solid" borderColor="grey.900">
            Reset It
          </H6>
        </Link>
      </FlexBox> */}
    </StyledCard>
  );
};

const initialValues = {
  email: "",
  password: "",
};
// const formSchema = yup.object().shape({
//   email: yup.string().email("invalid email").required("${path} is required"),
//   password: yup.string().required("${path} is required"),
// });
export default Login;
