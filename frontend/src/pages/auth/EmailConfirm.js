import {
  Alert,
  Button,
  Card,
  CircularProgress,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import { Controller, useForm } from "react-hook-form";
import { H3, Small } from "../../components/Typography";
import React, { useRef, useState } from "react";

import BazarButton from "../../components/BazarButton";
import BazarTextField from "../../components/BazarTextField";
import FlexBox from "../../components/FlexBox";
import { emailConfirm } from "../../redux/slice/authSlice";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
export default function EmailConfirm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [loading, setLoading] = useState(); //logging state
  const navigate = useNavigate();
  const timer = useRef();

  const { username } = useParams();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: username,
      authenticationCode: "",
    },
  });
  const onSubmit = async (data) => {
    if (!loading) {
      // console.log("setLoading(loading)", loading);
      setLoading(true); //开始转圈
      const response = await dispatch(emailConfirm(data));
      if (response.meta.requestStatus === "fulfilled") {
        timer.current = window.setTimeout(() => {
          setLoading(false);
          console.log("response", response);
          navigate(`/auth/login`, {
            replace: true,
          });
        }, 1000);
      } else {
        timer.current = window.setTimeout(() => {
          setLoading(false);
          setAlertContent(response.error.message);
          setAlert(true);
        }, 1000);
      }
    }
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
            邮箱验证
          </H3>{" "}
          <Small
            fontWeight="600"
            fontSize="12px"
            color="grey.800"
            textAlign="center"
            mb={4.5}
            display="block"
          >
            请检查邮箱,有可能会在垃圾邮件里!
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
                  }}
                  render={({ field: { onChange, value } }) => (
                    <BazarTextField
                      required
                      label="Email"
                      variant="outlined"
                      fullWidth
                      autoComplete="username"
                      onChange={onChange}
                      value={value}
                      error={!!errors.username}
                      helperText={errors.username ? "不能为空" : null}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sx={{ my: 1 }}>
                <Controller
                  name="authenticationCode"
                  control={control}
                  rules={{
                    required: true,
                    maxLength: 6,
                    minLength: 6,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <BazarTextField
                      required
                      label="验证码"
                      variant="outlined"
                      fullWidth
                      onChange={onChange}
                      value={value}
                      error={!!errors.authenticationCode}
                      helperText={
                        errors.authenticationCode ? "验证码不对" : null
                      }
                    />
                  )}
                />
              </Grid>
            </Grid>

            <BazarButton
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={loading}
              sx={{
                mb: "1.65rem",
                height: 44,
              }}
            >
              Confirm Sign Up
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
