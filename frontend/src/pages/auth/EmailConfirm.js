import { Alert, Card, CircularProgress, Grid } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Controller, useForm } from "react-hook-form";
import { H3, Small } from "../../components/Typography";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import BazarButton from "../../components/BazarButton";
import BazarTextField from "../../components/BazarTextField";
import FlexBox from "../../components/FlexBox";
import { emailConfirm, resendConfirmationCode } from "../../redux/slice/authSlice";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useParams } from "react-router";
import SnackBar from '../../components/SnackBar';


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

const anchorOrigin = {
  vertical: 'top',
  horizontal: 'center',
}
export default function EmailConfirm(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [loading, setLoading] = useState(); //logging state
  const { t } = useTranslation();

  const [alertStatus, setAlertStatus] = useState({
    isOpen: false,
    isSuccess: null,
    sentence: null,
  });

  // 发送成功验证码之后的等待
  const [isSendWait, setIsSendWait] = useState(false);
  // 发送验证码请求时候的按钮loading状态
  const [sendLoading, setSendLoading] = useState(false);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const timer = useRef();
  const codeSendTimer = useRef();
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

  useEffect(() => {
    // 进入组件时 验证码应该已经发送了 直接开始倒计时
    startCount(5);
    // 检查是否是登录时由于没有验证邮箱跳转到这个页面的 如果是显示提示
    if (location.state.status === "UserNotConfirmedException") {
      setAlertStatus({
        isOpen: true,
        isSuccess: false,
        sentence: "Your email has not confirmed yet, please confirm",
        anchorOrigin
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onSubmit = async (data) => {
    if (!loading) {
      setLoading(true); //开始转圈
      const response = await dispatch(emailConfirm(data));
      if (response.meta.requestStatus === "fulfilled") {
        timer.current = window.setTimeout(() => {
          setLoading(false);
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

  const handleSendSecurityCode = async (username) => {
    try {
      setSendLoading(true);
      const response  = await dispatch(resendConfirmationCode({username}));
      setSendLoading(false);
      // 验证码发送成功
      if (response.meta.requestStatus === "fulfilled") {
        setAlertStatus({
            isOpen: true,
            isSuccess: true,
            sentence: "code sent successfully",
            anchorOrigin
        });
        startCount(5);
      } else { // 发送验证码失败
        throw response.error.message;
      }
    } catch (error) {
      setAlertStatus({
        isOpen: true,
        isSuccess: false,
        sentence: error,
        anchorOrigin
      });
      endCount();
    }
  }

  const startCount = (waitingSec) => {
    setCount(waitingSec);
    setIsSendWait(true);
    let i = waitingSec;
    codeSendTimer.current = setInterval(() => {
        i--;
        setCount((prev) => prev - 1);
        if (i <= 0) {
            endCount();
        }
    }, 1000);
  }

  const endCount = () => {
      if (codeSendTimer.current) {
        clearInterval(codeSendTimer.current);
        setIsSendWait(false);
        codeSendTimer.current = null;
      }
  }

  return (
    <FlexBox
      flexDirection="column"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <SnackBar alertStatus={alertStatus}></SnackBar>
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
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between'}}>
                      <Box sx={{ flex: 1, pr: '0.5rem' }}>
                        <BazarTextField
                            required
                            label="Email"
                            variant="outlined"
                            disabled={true}
                            fullWidth
                            autoComplete="username"
                            onChange={onChange}
                            value={value}
                            error={!!errors.username}
                            helperText={errors.username ? "不能为空" : null}
                        />
                      </Box>
                      <BazarButton
                          variant="contained"
                          color="primary"
                          disabled={isSendWait || sendLoading}
                          sx={{height: '44px', width: '100px'}}
                          onClick={() => handleSendSecurityCode(value)}
                      >
                          { !count ? t("description.reSendCode") : count}
                          {sendLoading && (
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
