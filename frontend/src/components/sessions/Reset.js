/*
 * @Author: 李佳修
 * @Date: 2022-04-29 14:46:25
 * @LastEditTime: 2022-04-29 17:25:38
 * @LastEditors: 李佳修
 * @FilePath: /bhpmJS/frontend/src/components/sessions/Reset.js
 */
import * as yup from "yup";
import { Alert, Card, CircularProgress, IconButton } from "@mui/material";
import { H3, H6, Small } from "../Typography";
import { Link, useNavigate } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";

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
    loadUser,
    changePassword
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

const Reset = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [oldVisibility, setOldVisibility] = useState(false);
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

  
  const [alertStatus, setAlertStatus] = useState({
    isOpen: false,
    isSuccess: null,
    sentence: null,
  });

  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [user, setUser] = useState(null);
  const [initialValues, setInitialValues] = useState({
    email: "",
    old_password: "",
    new_password: "",
    confirm_password: ""
  });

  useEffect(() => {
    const getUser = async () => {
        try {
            const response = await dispatch(loadUser());
            if (response.meta.requestStatus === "fulfilled") {
                setUser(() => response);
            } else {
                throw response.error.message;
            }
        } catch (error) {
            setAlertStatus({
                isOpen: true,
                isSuccess: false,
                sentence: "Failed to get user",
                anchorOrigin
            });
        }
    }
    getUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    if (user) {
        values.email = user.payload.attributes.email;
        setInitialValues(prev => ({
            ...prev,
            email: user.payload.attributes.email
        }));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleFormSubmit = async (values) => {
    try {
        setLoading(true);
        const response = await dispatch(changePassword({
            user: user.payload,
            ...values
        }));
        setLoading(false);
        if (response.meta.requestStatus === "fulfilled") {
            setAlertStatus({
                isOpen: true,
                isSuccess: true,
                sentence: "Password changed successfully",
                anchorOrigin
            });
            navigate('/auth/Login');
        } else {
            throw response.error.message;
        }
    } catch (error) {
        setAlertContent(error);
        setAlert(true);
    }
  };

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
          {t("description.changePassword")}
        </H3>
        <Small
          fontWeight="600"
          fontSize="12px"
          color="grey.800"
          textAlign="center"
          mb={4.5}
          display="block"
        >
          {t("description.changePswDesc")}
        </Small>
        {alert ? (
          <Alert className={classes.alert} severity="error">
            {alertContent}
          </Alert>
        ) : null}

        <BazarTextField
          mb={1.5}
          name="email"
          label={t("description.Email")}
          placeholder="exmple@mail.com"
          disabled={true}
          variant="outlined"
          size="small"
          type="email"
          fullWidth
          value={values.email || ""}
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
        />

        <BazarTextField
          mb={2}
          name="old_password"
          label={t("description.oldPassword")}
          placeholder="*********"
          autoComplete="new-password"
          type={oldVisibility ? "text" : "password"}
          variant="outlined"
          size="small"
          fullWidth
          InputProps={{
            endAdornment: (
              <IconButton
                size="small"
                type="button"
                onClick={() => togglePasswordVisibility(setOldVisibility)}
              >
                {oldVisibility ? (
                  <Visibility className="passwordEye" fontSize="small" />
                ) : (
                  <VisibilityOff className="passwordEye" fontSize="small" />
                )}
              </IconButton>
            ),
          }}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.old_password || ""}
          error={!!touched.old_password && !!errors.old_password}
          helperText={touched.old_password && errors.old_password}
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

        <FlexBox justifyContent="center" alignItems="center" mb="1rem">
          <Link to="/">
            <H6 ml={1} borderBottom="1px solid" borderColor="grey.900">
              cancel
            </H6>
          </Link>
        </FlexBox>
      </form>
    </StyledCard>
  );
};

const formSchema = yup.object().shape({
    old_password: yup.string().required("Old password is required"),
    new_password: yup.string().required("New password is required"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("new_password"), null], "Passwords must match")
      .required("Please re-type password"),
});
export default Reset;
