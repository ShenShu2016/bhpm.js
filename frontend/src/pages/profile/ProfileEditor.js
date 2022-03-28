import * as yup from "yup";

import { Avatar, Button, Grid, TextField } from "@mui/material";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Box } from "@mui/system";
import CameraEnhance from "@mui/icons-material/CameraEnhance";
import Card1 from "../../components/Card1";
import DateTimePicker from "@mui/lab/DateTimePicker";
import FlexBox from "../../components/FlexBox";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Person from "@mui/icons-material/Person";
import React from "react";

const ProfileEditor = () => {
  const handleFormSubmit = async (values) => {
    console.log(values);
  };

  return (
    <>
      <Card1>
        <FlexBox alignItems="flex-end" mb={3}>
          <Avatar
            src="/assets/images/faces/ralph.png"
            sx={{
              height: 64,
              width: 64,
            }}
          />

          <Box ml={-2.5}>
            <label htmlFor="profile-image">
              <Button
                component="span"
                color="secondary"
                sx={{
                  bgcolor: "grey.300",
                  height: "auto",
                  p: "8px",
                  borderRadius: "50%",
                }}
              >
                <CameraEnhance fontSize="small" />
              </Button>
            </label>
          </Box>
          <Box display="none">
            <input
              onChange={(e) => console.log(e.target.files)}
              id="profile-image"
              accept="image/*"
              type="file"
            />
          </Box>
        </FlexBox>

        <Formik
          initialValues={initialValues}
          validationSchema={checkoutSchema}
          onSubmit={handleFormSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box mb={4}>
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <TextField
                      name="first_name"
                      label="First Name"
                      fullWidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.first_name || ""}
                      error={!!touched.first_name && !!errors.first_name}
                      helperText={touched.first_name && errors.first_name}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      name="last_name"
                      label="Last Name"
                      fullWidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.last_name || ""}
                      error={!!touched.last_name && !!errors.last_name}
                      helperText={touched.last_name && errors.last_name}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      name="email"
                      type="email"
                      label="Email"
                      fullWidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email || ""}
                      error={!!touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      name="contact"
                      label="Phone"
                      fullWidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.contact || ""}
                      error={!!touched.contact && !!errors.contact}
                      helperText={touched.contact && errors.contact}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DateTimePicker
                        label="Birth Date"
                        value={values.birth_date}
                        maxDate={new Date()}
                        inputFormat="dd MMMM, yyyy"
                        shouldDisableTime={() => false}
                        renderInput={(props) => (
                          <TextField
                            size="small"
                            fullWidth
                            {...props}
                            error={
                              (!!touched.birth_date && !!errors.birth_date) ||
                              props.error
                            }
                            helperText={touched.birth_date && errors.birth_date}
                          />
                        )}
                        onChange={(newValue) =>
                          setFieldValue("birth_date", newValue)
                        }
                      />
                    </LocalizationProvider>
                  </Grid>
                </Grid>
              </Box>

              <Button type="submit" variant="contained" color="primary">
                Save Changes
              </Button>
            </form>
          )}
        </Formik>
      </Card1>
    </>
  );
};

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  contact: "",
  birth_date: new Date(),
};
const checkoutSchema = yup.object().shape({
  first_name: yup.string().required("required"),
  last_name: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup.string().required("required"),
  birth_date: yup.date().required("invalid date"),
});
export default ProfileEditor;