import { Container, Grid } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import CategorySectionHeader from "../CategorySectionHeader";
import ProductCard1 from "../product-cards/ProductCard1";
import React from "react";
import { H3 } from "../Typography";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import { removeAlert, setAlert } from "../../redux/slice/generalSlice";

const SectionMyCollection = ({ moreItems }) => {
  console.log(moreItems);
  const alert = useSelector((state) => state.general.alert);
  const dispatch = useDispatch();
  const toggleAlert = async () => {
    if (alert === false) {
      dispatch(setAlert());
    }
  };
  const deleteAlert = async () => {
    if(alert === true){
      dispatch(removeAlert());
    }
  }
  console.log(alert);
  return (
    <Container
      sx={{
        mt: "35px",
        mb: "70px",
      }}
    >
      <CategorySectionHeader title="Your Collections" />
      {moreItems.length !== 0 ? (
        <Grid container spacing={3}>
          {moreItems.map((item, ind) => (
            <Grid item lg={3} md={4} sm={6} xs={12} key={ind}>
              <ProductCard1 off={25} hoverEffect {...item} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Link to={`/`}>
            <H3
              className="title"
              fontSize="16px"
              textAlign="left"
              fontWeight="600"
              color="secondary.main"
              mb={1}
              mt={1}
            >
              Empty! Go to collect your favorites!
            </H3>
          </Link>
          {alert ? (
            <Alert severity="success" onClose={() => deleteAlert()}>
              <AlertTitle>Success</AlertTitle>
              This is a success alert — check it out!
            </Alert>
          ) : (
            <Alert severity="error" onClose={() => toggleAlert()}>
              <AlertTitle>Error</AlertTitle>
              This is an error alert — <strong>check it out!</strong>
            </Alert>
          )}
        </Stack>
      )}
    </Container>
  );
};

export default SectionMyCollection;
