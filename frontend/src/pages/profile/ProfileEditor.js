import { Button, Grid, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { Box } from "@mui/system";
import Card1 from "../../components/Card1";
import { Formik } from "formik";
import React from "react";
import { putUserProfile } from "../../redux/slice/profileSlice";
import { useNavigate } from "react-router-dom";

const ProfileCreater = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username } = useSelector((state) => state.userAuth.user);

  const handleFormSubmit = async (values) => {
    console.log(values);
    const updateUserInput = { id: username, ...values };
    const response = await dispatch(putUserProfile({ updateUserInput }));
    console.log(response);
    navigate(`/profile`, {
      replace: true,
    });
  };

  return (
    <>
      <Card1>
        <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
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
                      name="name"
                      label="Name"
                      fullWidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name || ""}
                      error={!!touched.name && !!errors.name}
                      helperText={touched.name && errors.name}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      name="companyName"
                      label="Company Name"
                      fullWidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.companyName || ""}
                      error={!!touched.companyName && !!errors.companyName}
                      helperText={touched.companyName && errors.companyName}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      name="address"
                      type="address"
                      label="Address"
                      fullWidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.address || ""}
                      error={!!touched.address && !!errors.address}
                      helperText={touched.address && errors.address}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      name="fax"
                      label="Fax"
                      fullWidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.fax || ""}
                      error={!!touched.fax && !!errors.fax}
                      helperText={touched.fax && errors.fax}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      name="idPassport"
                      label="ID/Passport"
                      fullWidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.idPassport || ""}
                      error={!!touched.idPassport && !!errors.idPassport}
                      helperText={touched.idPassport && errors.idPassport}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      name="title"
                      label="Title"
                      fullWidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.title || ""}
                      error={!!touched.title && !!errors.title}
                      helperText={touched.title && errors.title}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      name="phone"
                      label="Phone"
                      fullWidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.phone || ""}
                      error={!!touched.phone && !!errors.phone}
                      helperText={touched.phone && errors.phone}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      name="phone2"
                      label="Phone2"
                      fullWidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.phone2 || ""}
                      error={!!touched.phone2 && !!errors.phone2}
                      helperText={touched.phone2 && errors.phone2}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      name="email"
                      label="Email"
                      fullWidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email || ""}
                      error={!!touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
                    />
                  </Grid>
                </Grid>
              </Box>

              <Button type="submit" variant="contained" color="primary">
                Update
              </Button>
            </form>
          )}
        </Formik>
      </Card1>
    </>
  );
};

const initialValues = {
  name: "",
  companyName: "",
  address: "",
  fax: "",
  idPassport: "",
  title: "",
  phone: "",
  phone2: "",
  email: "",
};

export default ProfileCreater;
