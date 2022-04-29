import {
  Alert,
  Box,
  Card,
  CircularProgress,
  Grid,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { H3, Small } from "../../components/Typography";
import { Link, useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";

import BazarButton from "../../components/BazarButton";
import BazarTextField from "../../components/BazarTextField";
import FlexBox from "../../components/FlexBox";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { signUp } from "../../redux/slice/authSlice";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(() => ({
  alert: {
    marginTop: "1.5rem",
  },
}));
const StyledCard = styled(({ children, ...rest }) => (
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
export default function SignUp() {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const timer = useRef();
  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      email: "",
      phone: "",
    },
  });

  //const { isAuthenticated } = useSelector((state) => state.userAuth);

  const handleClickShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const response = await dispatch(signUp(data));
    if (response.meta.requestStatus === "fulfilled") {
      navigate(`/auth/emailConfirm/${getValues("username")}`, {
        replace: true,
      });
    } else {
      timer.current = window.setTimeout(() => {
        setLoading(false);
        setAlertContent(response.error.message);
        setAlert(true);
      }, 1000);
    }
    setLoading(false);
  };

  return (
    <FlexBox
      flexDirection="column"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <StyledCard elevation={3}>
        <Box className="content">
          <H3 textAlign="center" mb={1}>
            {t("description.bowellsignup")}
          </H3>
          <Small
            fontWeight="600"
            fontSize="12px"
            color="grey.800"
            textAlign="center"
            mb={4.5}
            display="block"
          >
            {t("description.AlreadyHaveAccount")}
            <Link to="/auth/login">{t("description.Login")}</Link>
          </Small>
          {alert ? (
            <Alert className={classes.alert} severity="error">
              {alertContent}
            </Alert>
          ) : (
            <></>
          )}
          <Box
            component="form"
            noValidate
            sx={{ my: 4 }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Grid container>
              <Grid item xs={12} sx={{ my: 1 }}>
                <Controller
                  name="username"
                  control={control}
                  rules={{
                    required: true,
                    pattern:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <BazarTextField
                      required
                      label={t("description.Email")}
                      variant="outlined"
                      placeholder=""
                      fullWidth
                      autoComplete="username"
                      onChange={onChange}
                      value={value}
                      error={!!errors.username}
                      helperText={errors.username ? "邮箱格式不对" : null}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sx={{ my: 1 }}>
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <BazarTextField
                      required
                      label={t("description.Phone")}
                      variant="outlined"
                      placeholder=""
                      fullWidth
                      autoComplete="phone"
                      onChange={onChange}
                      value={value}
                      error={!!errors.phone}
                      helperText={errors.phone ? "Required" : null}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} sx={{ my: 1 }}>
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <BazarTextField
                      required
                      label="Password"
                      variant="outlined"
                      placeholder=""
                      fullWidth
                      type={isShowPassword ? "text" : "password"}
                      autoComplete="password"
                      onChange={onChange}
                      value={value}
                      error={!!errors.password}
                      helperText={errors.password ? "Required" : null}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              edge="end"
                            >
                              {isShowPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    // <FormControl fullWidth required variant="outlined">
                    //   <OutlinedInput
                    //     id="password"
                    //     type={isShowPassword ? "text" : "password"}
                    //     onChange={onChange}
                    //     error={!!errors.password}
                    //     value={value}
                    //     endAdornment={
                    //       <InputAdornment position="end">
                    //         <IconButton
                    //           aria-label="toggle password visibility"
                    //           onClick={handleClickShowPassword}
                    //           edge="end"
                    //         >
                    //           {isShowPassword ? (
                    //             <VisibilityOff />
                    //           ) : (
                    //             <Visibility />
                    //           )}
                    //         </IconButton>
                    //       </InputAdornment>
                    //     }
                    //     label="Password"
                    //   />
                    // </FormControl>
                  )}
                />
              </Grid>
            </Grid>
            <BazarButton
              onClick={handleSubmit(onSubmit)}
              variant="contained"
              fullWidth
              color="primary"
              disabled={loading}
              sx={{ my: 4 }}
            >
              {t("description.signup")}
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
          </Box>
        </Box>
      </StyledCard>
    </FlexBox>
  );
}
