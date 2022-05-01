/*
 * @Author: 李佳修
 * @Date: 2022-04-28 15:12:28
 * @LastEditTime: 2022-05-01 08:30:32
 * @LastEditors: 李佳修
 * @FilePath: /bhpmJS/frontend/src/components/sessions/Forgot.js
 */
import * as yup from "yup";
import { Alert, Box, Card, CircularProgress, IconButton } from "@mui/material";
import { H3, H6, Small } from "../Typography";
import { Link, useNavigate } from "react-router-dom";
import React, { useCallback, useRef, useState } from "react";

import BazarButton from "../BazarButton";
import BazarTextField from "../BazarTextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FlexBox from "../FlexBox";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import {
    forgotPassword,
    forgotPassWordSubmit
} from '../../redux/slice/authSlice.js'
import SnackBar from '../SnackBar';

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

const Forgot = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmVisibility, setConfirmVisibility] = useState(false);
  const togglePasswordVisibility = useCallback((setter) => {
    setter((visible) => !visible);
  }, []);

  const anchorOrigin = {
    vertical: 'top',
    horizontal: 'center',
  }

  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  // 发送成功验证码之后的等待
  const [isSendWait, setIsSendWait] = useState(false);
  // 发送验证码请求时候的按钮loading状态
  const [sendLoading, setSendLoading] = useState(false)
  const [count, setCount] = useState(0);
  
  const [alertStatus, setAlertStatus] = useState({
    isOpen: false,
    isSuccess: null,
    sentence: null,
  });

  const codeSendTimer = useRef();
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");


  const handleFormSubmit = async (values) => {
    try {
        setLoading(true);
        const response = await dispatch(forgotPassWordSubmit(values));
        setLoading(false);
        if (response.meta.requestStatus === "fulfilled") {
            setAlertStatus({
                isOpen: true,
                isSuccess: true,
                sentence: "Password set successfully",
                anchorOrigin
            });
            endCount();
            navigate('/auth/Login');
        } else {
            throw response.error.message;
        }
    } catch (error) {
        setAlertContent(error);
        setAlert(true);
    }
  };

  const handleSendSecurityCode = async () => {
    try {
        // 发送验证码
        setSendLoading(() => true);
        const response = await dispatch(forgotPassword({username: values.username}));
        setSendLoading(() => false);
        // 验证码发送成功
        if (response.meta.requestStatus === "fulfilled") {
            setAlertStatus({
                isOpen: true,
                isSuccess: true,
                sentence: "code sent successfully",
                anchorOrigin
            });
            startCount(60);
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
    setIsSendWait(true);
    setCount(waitingSec);
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

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      onSubmit: handleFormSubmit,
      initialValues,
      validationSchema: formSchema,
    });
   
  return (
    <StyledCard elevation={3}>
      <SnackBar alertStatus={alertStatus}></SnackBar>
      <form className="content" onSubmit={handleSubmit}>
        <H3 textAlign="center" mb={1}>
          {t("description.resetPassword")}
        </H3>
        <Small
          fontWeight="600"
          fontSize="12px"
          color="grey.800"
          textAlign="center"
          mb={4.5}
          display="block"
        >
          {t("description.resetPswDesc")}
        </Small>
        {alert ? (
          <Alert className={classes.alert} severity="error">
            {alertContent}
          </Alert>
        ) : null}
        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', mb: 2 }}>
            <Box sx={{ flex: 1, pr: '0.5rem' }}>
                <BazarTextField
                    name="username"
                    label={t("description.Email")}
                    placeholder="exmple@mail.com"
                    variant="outlined"
                    size="small"
                    fullWidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.username || ""}
                    error={!!touched.username && !!errors.username}
                    helperText={touched.username && errors.username}
                />
            </Box>
            
            <BazarButton
                variant="contained"
                color="primary"
                disabled={isSendWait || sendLoading}
                sx={{height: '44px', width: '100px'}}
                onClick={handleSendSecurityCode}
            >
                { !count ? t("description.sendCode") : count}
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
      

        <BazarTextField
          mb={2}
          name="code"
          label={t("description.verificationCode")}
          placeholder={t("description.verificationPlaceHolder")}
          variant="outlined"
          size="small"
          fullWidth
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.code || ""}
          error={!!touched.code && !!errors.code}
          helperText={touched.code && errors.code}
        />

        <BazarTextField
          mb={2}
          name="new_password"
          label={t("description.new_password")}
          placeholder="*********"
          autoComplete="new-password"
          type={passwordVisibility ? "text" : "password"}
          variant="outlined"
          size="small"
          fullWidth
          InputProps={{
            endAdornment: (
              <IconButton
                size="small"
                type="button"
                onClick={() => togglePasswordVisibility(setPasswordVisibility)}
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
          value={values.new_password || ""}
          error={!!touched.new_password && !!errors.new_password}
          helperText={touched.new_password && errors.new_password}
        />

        <BazarTextField
          mb={2}
          name="confirm_password"
          label={t("description.confirm_password")}
          placeholder="*********"
          type={confirmVisibility ? "text" : "password"}
          variant="outlined"
          size="small"
          autoComplete="new-password"
          fullWidth
          InputProps={{
            endAdornment: (
              <IconButton
                size="small"
                type="button"
                onClick={() => togglePasswordVisibility(setConfirmVisibility)}
              >
                {confirmVisibility ? (
                  <Visibility className="passwordEye" fontSize="small" />
                ) : (
                  <VisibilityOff className="passwordEye" fontSize="small" />
                )}
              </IconButton>
            ),
          }}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.confirm_password || ""}
          error={!!touched.confirm_password && !!errors.confirm_password}
          helperText={touched.confirm_password && errors.confirm_password}
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
          {t("description.submit")}{" "}
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

        <FlexBox justifyContent="center" alignItems="center" my="1.25rem">
          <Box>{t("description.donthaveaccount")}</Box>
          <Link to="/auth/signUp">
            <H6 ml={1} borderBottom="1px solid" borderColor="grey.900">
              {t("description.signup")}
            </H6>
          </Link>
        </FlexBox>
      </form>
    </StyledCard>
  );
};

const initialValues = {
    username: "",
    code: "",
    new_password: "",
    confirm_password: ""
};
const formSchema = yup.object().shape({
    username: yup.string().email().required("Email is required"),
    code: yup.string().required("Verification code is required"),
    new_password: yup.string().required("New password is required"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("new_password"), null], "Passwords must match")
      .required("Please re-type password"),
});
export default Forgot;
