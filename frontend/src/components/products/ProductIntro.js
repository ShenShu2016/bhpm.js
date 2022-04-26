/*
 * @Author: Quennel
 * @Date: 2022-04-24 10:36:02
 * @LastEditTime: 2022-04-26 13:42:43
 * @LastEditors: Shen Shu
 * @Description:
 * @FilePath: \bhpmJS\frontend\src\components\products\ProductIntro.js
 * Quennel
 */

import { Box, Button, Container, Grid, IconButton } from "@mui/material";
import { H3, H4, H6 } from "../../components/Typography";
import { Link, useNavigate } from "react-router-dom";
import React, { useCallback, useState } from "react";
import {
  postMyCollection,
  removeMyCollection,
} from "../../redux/slice/myCollectionSlice";
import { useDispatch, useSelector } from "react-redux";

import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import BazarAvatar from "../../components/BazarAvatar";
import FlexBox from "../FlexBox";
import ImageViewer from "react-simple-image-viewer";
import SnackBar from "../SnackBar";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import { useTranslation } from "react-i18next";

const ProductIntro = ({ product }) => {
  const { title } = product;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const language = useSelector((state) => state.general.language);
  const { username } = useSelector((state) => state.userAuth.user);
  const { isAuthenticated } = useSelector((state) => state.userAuth);
  const [alertStatus, setAlertStatus] = useState({
    isOpen: false,
    isSuccess: null,
    sentence: null,
  });
  const { t } = useTranslation();

  const toggleIsFavorite = async () => {
    setIsFavorite((fav) => !fav);
    console.log(isFavorite);
    if (isFavorite === false) {
      const createMyCollectionInput = {
        id: username + product.id,
        lotsID: product.id,
      };
      const response = await dispatch(
        postMyCollection({ createMyCollectionInput })
      );
      if (response.meta.requestStatus === "fulfilled") {
        setAlertStatus({ isOpen: true, isSuccess: true, sentence: "收藏成功" });
      } else {
        setAlertStatus({
          isOpen: true,
          isSuccess: false,
          sentence: "收藏失败",
        });
      }
    } else {
      const response = await dispatch(
        removeMyCollection({ id: username + product.id })
      );
      if (response.meta.requestStatus === "fulfilled") {
        setAlertStatus({
          isOpen: true,
          isSuccess: true,
          sentence: "取消收藏成功",
        });
      } else {
        setAlertStatus({
          isOpen: true,
          isSuccess: false,
          sentence: "取消收藏失败",
        });
      }
    }
  };
  const handleImageClick = (ind) => () => {
    setSelectedImage(ind);
  };

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <Container
      sx={{
        my: "2rem",
      }}
    >
      <Box width="100%">
        <Grid container spacing={3} justifyContent="space-around">
          <Grid item md={6} xs={12} alignItems="center">
            <Box>
              <FlexBox alignItems="center" mb={2}>
                <IconButton
                  // sx={{
                  //   p: "0px",
                  // }}
                  onClick={() => navigate(-1)}
                >
                  <ArrowCircleLeftOutlinedIcon fontSize="normal" />
                </IconButton>
              </FlexBox>
              <FlexBox justifyContent="center" mb={6}>
                <img
                  src={product.auctionItem.imgUrls[selectedImage]}
                  onClick={() =>
                    openImageViewer(
                      product.auctionItem.imgUrls.indexOf(
                        product.auctionItem.imgUrls[selectedImage]
                      )
                    )
                  }
                  alt={title}
                  height={300}
                  width={300}
                  loading="eager"
                  objectfit="contain"
                />
                {isViewerOpen && (
                  <ImageViewer
                    src={product.auctionItem.imgUrls}
                    currentIndex={currentImage}
                    onClose={closeImageViewer}
                    closeOnClickOutside={true}
                    backgroundStyle={{
                      backgroundColor: "white",
                    }}
                  />
                )}
                <IconButton
                  aria-label="Example"
                  onClick={() =>
                    openImageViewer(
                      product.auctionItem.imgUrls.indexOf(
                        product.auctionItem.imgUrls[selectedImage]
                      )
                    )
                  }
                >
                  <ZoomInIcon fontSize="large" />
                </IconButton>
              </FlexBox>
              <FlexBox overflow="auto">
                {product.auctionItem.imgUrls.map((url, ind) => (
                  <Box
                    height={64}
                    width={64}
                    minWidth={64}
                    bgcolor="white"
                    borderRadius="10px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    border="1px solid"
                    style={{
                      cursor: "pointer",
                    }}
                    ml={ind === 0 ? "auto" : 0}
                    mr={
                      ind === product.auctionItem.imgUrls.length - 1
                        ? "auto"
                        : "10px"
                    }
                    borderColor={
                      selectedImage === ind ? "primary.main" : "grey.400"
                    }
                    onClick={handleImageClick(ind)}
                    key={ind}
                  >
                    <BazarAvatar src={url} variant="square" height={40} />
                  </Box>
                ))}
              </FlexBox>
            </Box>
          </Grid>

          <Grid item md={6} xs={12} alignItems="center">
            <H3>Lot #{product.lot}</H3>
            <FlexBox
              alignItems="center"
              justifyContent="space-between"
              mt={2}
              mb={2}
            >
              <Box alignContent="center">
                <H4>{t("description.ProductTitle")}:</H4>
              </Box>
              <H3 ml={1}>
                {language.currentLanguage === "zh_hk" &&
                  product.auctionItem.title}
                {language.currentLanguage === "en_us" &&
                  product.auctionItem.titleEng}
              </H3>
            </FlexBox>
            <FlexBox alignItems="center" justifyContent="space-between" mb={4}>
              <H4>{t("description.ProductDescription")}:</H4>
              <H3 ml={1}>
                {language.currentLanguage === "zh_hk" &&
                  product.auctionItem.description}
                {language.currentLanguage === "en_us" &&
                  product.auctionItem.descriptionEng}
              </H3>
            </FlexBox>

            <FlexBox alignItems="center" justifyContent="space-between" mb={4}>
              <H6 color="primary" mb={0.5} lineHeight="1">
                {t("description.ProductEstimatedPrice")}:
              </H6>
              <H6 color="primary" mb={0.5} lineHeight="1">
                ${product.estimatedPriceMin.toFixed(2)} - $
                {product.estimatedPriceMax.toFixed(2)}
              </H6>
            </FlexBox>

            {product.auctionItem.condition && (
              <FlexBox alignItems="center" mb={3}>
                <H3> {t("description.ProductCondition")}: </H3>
                <H4 ml={1}> {product.auctionItem.condition} </H4>
              </FlexBox>
            )}
            {product.auctionItem.provenance && (
              <FlexBox alignItems="center" mb={3}>
                <H3> {t("description.ProductProvenance")}: </H3>
                <H4 ml={1}> {product.auctionItem.provenance} </H4>
              </FlexBox>
            )}
            <FlexBox justifyContent="space-between" alignItems="center" mb={2}>
              <Button
                onClick={toggleIsFavorite}
                variant={isFavorite ? "contained" : "outlined"}
                color="primary"
                mr={2}
              >
                {t("description.ProductCollect")}
              </Button>
              {!isAuthenticated && (
                <Link to={"/auth/signUp"}>
                  <Button ml={3} variant="outlined">
                    Place Bid
                  </Button>
                </Link>
              )}
            </FlexBox>
            <FlexBox alignItems="center" mb={2}></FlexBox>
          </Grid>
        </Grid>
        <SnackBar alertStatus={alertStatus}></SnackBar>
      </Box>
    </Container>
  );
};

export default ProductIntro;
