/*
 * @Author: Shen Shu
 * @Date: 2022-03-24 23:14:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-27 16:58:41
 * @FilePath: \bhpmJS\frontend\src\components\product-cards\ProductCard1.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import "react-lazy-load-image-component/src/effects/blur.css";

import { Box, Dialog, DialogContent, IconButton, styled } from "@mui/material";
import React, { useCallback, useState } from "react";
import {
  postMyFavorite,
  removeMyFavorite,
} from "../../redux/slice/myFavoriteSlice";
import { useDispatch, useSelector } from "react-redux";

import BazarCard from "../BazarCard";
import Close from "@mui/icons-material/Close";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import FlexBox from "../FlexBox";
import { H3 } from "../Typography";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import SnackBar from "../SnackBar";
import { useTranslation } from "react-i18next";

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
  marginTop: "1rem",
  position: "relative",
  display: "inline-block",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

const ContentWrapper = styled(Box)(() => ({
  padding: "1rem",
  "& .title, & .categories": {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));
const HoverIconWrapper = styled(Box)(({ theme }) => ({
  // display: "none",
  flexDirection: "column",
  position: "absolute",
  top: "7px",
  right: "15px",
  cursor: "pointer",
  zIndex: 2,
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));

const ProductCard1 = ({ off, hoverEffect, item }) => {
  const { t } = useTranslation();
  const [isFavorite, setIsFavorite] = useState(
    item?.myFavorites?.items[0]?.id ? item?.myFavorites?.items[0]?.id : false
  );
  const [isLoading, setIsLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.userAuth.user);
  const { currentLanguage } = useSelector((state) => state.general.language);
  const [alertStatus, setAlertStatus] = useState({
    isOpen: false,
    isSuccess: null,
    sentence: null,
  });
  const toggleDialog = useCallback(() => {
    setOpen((open) => !open);
  }, []);

  const toggleIsFavorite = async () => {
    setIsLoading((pre) => !pre); //把它变成True
    if (isFavorite === false) {
      const createMyFavoriteInput = {
        //id: username + item.id,
        lotMyFavoritesId: item.id,
        owner: username,
      };
      const response = await dispatch(
        postMyFavorite({ createMyFavoriteInput })
      );
      if (response.meta.requestStatus === "fulfilled") {
        setAlertStatus({ isOpen: true, isSuccess: true, sentence: "收藏成功" });
        console.log(response.payload.id);
        setIsFavorite(response.payload.id);
      } else {
        setAlertStatus({
          isOpen: true,
          isSuccess: false,
          sentence: "收藏失败",
        });
      }
    } else {
      const response = await dispatch(removeMyFavorite({ id: isFavorite }));
      if (response.meta.requestStatus === "fulfilled") {
        setAlertStatus({
          isOpen: true,
          isSuccess: true,
          sentence: "取消收藏成功",
        });
        setIsFavorite(false);
      } else {
        setAlertStatus({
          isOpen: true,
          isSuccess: false,
          sentence: "取消收藏失败",
        });
      }
    }
    setIsLoading((pre) => !pre); //把它变成false
  };

  return (
    <StyledBazarCard hoverEffect={hoverEffect}>
      <ImageWrapper>
        <HoverIconWrapper>
          <IconButton
            sx={{
              p: "0px",
            }}
            onClick={toggleIsFavorite}
            disabled={isLoading}
          >
            {isFavorite ? (
              <Favorite color="primary" fontSize="small" />
            ) : (
              <FavoriteBorder fontSize="small" />
            )}
          </IconButton>
        </HoverIconWrapper>
        <Link to={`/lot/${item.id}`}>
          <LazyLoadImage
            effect="blur"
            src={item.auctionItem.imgUrls[0]}
            width={220}
            height={275}
            layout="responsive"
            alt={item.auctionItem.title}
            style={{ borderRadius: "10px" }}
          />
        </Link>
      </ImageWrapper>

      <ContentWrapper>
        <FlexBox>
          <Box flex="1 1 0" minWidth="0px" mr={1}>
            <Link to={`/lot/${item.id}`}>
              <H3
                className="title"
                fontSize="14px"
                textAlign="left"
                fontWeight="600"
                color="text.secondary"
                mb={1}
                title={item.auctionItem.title}
              >
                Lot #{item.lotOrder}:{" "}
                {currentLanguage === "zh_hk"
                  ? item.auctionItem.title
                  : item.auctionItem.titleEng}
              </H3>
            </Link>
            <FlexBox alignItems="center" mt={0.5}>
              <Box pr={1} fontWeight="600" color="primary.second">
                {t("description.ProductEstimatedPrice")}: $
                {item.startingPrice.toFixed(2)} - $
                {item.estimatedPriceMax.toFixed(2)}
              </Box>
            </FlexBox>
          </Box>
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
      <SnackBar alertStatus={alertStatus}></SnackBar>
    </StyledBazarCard>
  );
};

export default ProductCard1;
