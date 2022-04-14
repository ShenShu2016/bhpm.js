import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  styled,
  Button,
} from "@mui/material";
import React, { useCallback, useState } from "react";

import BazarCard from "../BazarCard";
import Close from "@mui/icons-material/Close";
import FlexBox from "../FlexBox";
import { H3 } from "../Typography";
import { Link } from "react-router-dom";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import API from "@aws-amplify/api";
import {
  createMyCollection,
} from "../../graphql/mutations";
//import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

//import RemoveRedEye from "@mui/icons-material/RemoveRedEye";

// import Favorite from "@mui/icons-material/Favorite";

const StyledBazarCard = styled(BazarCard)(() => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  margin: "auto",
  overflow: "hidden",
  transition: "all 250ms ease-in-out",
  borderRadius: "8px",
  "&:hover": {
    "& .css-1i2n18j": {
      display: "flex",
    },
  },
}));
const ImageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "inline-block",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

// const HoverIconWrapper = styled(Box)(({ theme }) => ({
//   display: "none",
//   flexDirection: "column",
//   position: "absolute",
//   top: "7px",
//   right: "15px",
//   cursor: "pointer",
//   zIndex: 2,
//   [theme.breakpoints.down("md")]: {
//     display: "flex",
//   },
// }));
const ContentWrapper = styled(Box)(() => ({
  padding: "1rem",
  "& .title, & .categories": {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

const ProductCard1 = ({
  id,
  title,
  price,
  startingPrice,
  imgUrl,
  hoverEffect,
}) => {
  //const [isFavorite, setIsFavorite] = useState(false);
  const [open, setOpen] = useState(false);
  // const { state, dispatch } = useAppContext();
  // const cartItem = state.cart.cartList.find((item) => item.id === id);
  const toggleDialog = useCallback(() => {
    setOpen((open) => !open);
  }, []);
  console.log();
  // const toggleIsFavorite = async () => {
  //   setIsFavorite((fav) => !fav);
  // };ƒ

  // const handleCartAmountChange = useCallback(
  //   (amount) => () => {
  //     dispatch({
  //       type: "CHANGE_CART_AMOUNT",
  //       payload: {
  //         name: title,
  //         qty: amount,
  //         price,
  //         imgUrl,
  //         id,
  //       },
  //     });
  //   },
  //   []
  // );
  const postMyCollection = async (id) => {
    console.log(id);
    const createMyCollectionInput = {
      lotsID: id,
    };
    try {
      const response = await API.graphql(
        graphqlOperation(createMyCollection, {
          input: createMyCollectionInput,
        })
      );
      console.log("response", response);
      return response.data.createMyCollection;
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <StyledBazarCard hoverEffect={hoverEffect}>
      <ImageWrapper>
        <Link to={`/lots/${id}`}>
          <img
            src={imgUrl}
            // maxWidth={300}
            height={300}
            layout="responsive"
            alt={title}
          />
        </Link>
      </ImageWrapper>

      <ContentWrapper>
        <FlexBox>
          <Box flex="1 1 0" minWidth="0px" mr={1}>
            <Link to={`/product/${id}`}>
              <H3
                className="title"
                fontSize="14px"
                textAlign="left"
                fontWeight="600"
                color="text.secondary"
                mb={1}
                title={title}
              >
                {title}
              </H3>
            </Link>

            <FlexBox alignItems="center" mt={0.5}>
              <Box pr={1} fontWeight="600" color="primary.second">
                起拍價: ${startingPrice.toFixed(2)}
              </Box>
            </FlexBox>
            <FlexBox alignItems="center" mt={0.5}>
              <Box pr={1} fontWeight="600" color="primary.main">
                預計成交價: ${price.toFixed(2)}
              </Box>
            </FlexBox>
          </Box>
          <Box minWidth="0px" ml={1} mt={3}>
          <Button
              className="button-link"
              variant="contained"
              color="primary"
              disableElevation
              sx={{
                px: "1.25rem",
                height: "44px",
                borderRadius: "8px",
              }}
              onClick={(e)=>postMyCollection(id)}
              component={Link}
              to={'/profile/myCollection'}
              //to={''}
            >
              收藏
            </Button></Box>
        </FlexBox>
      </ContentWrapper>

      <Dialog open={open} maxWidth={false} onClose={toggleDialog}>
        <DialogContent
          sx={{
            paddingBottom: "1.25rem",
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: "0",
              right: "0",
            }}
            onClick={toggleDialog}
          >
            <Close className="close" fontSize="small" color="primary" />
          </IconButton>
        </DialogContent>
      </Dialog>
    </StyledBazarCard>
  );
};

export default ProductCard1;
