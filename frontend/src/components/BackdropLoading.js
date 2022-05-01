/*
 * @Author: Shen Shu
 * @Date: 2022-04-24 22:55:36
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-30 01:53:26
 * @FilePath: \bhpmJS\frontend\src\components\BackdropLoading.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import { Backdrop, Box, CircularProgress } from "@mui/material";

import React from "react";
import { red } from "@mui/material/colors";

export default function BackdropLoading({ open = true }) {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <Box
        sx={{
          position: "absolute",
          display: "inline-flex",
          top: "50%",
          left: "50%",
          transform: `translate(-50%,-50%)`,
        }}
      >
        <CircularProgress
          size={175}
          thickness={2}
          sx={{
            color: red[200],
          }}
        />
        <Box
          component="img"
          src={
            "https://bhpmjsaa65d4d2254e4b41a89df0d66c611dc0144251-prod.s3.us-west-1.amazonaws.com/public/logo/bhpm_logo_black.jpg"
          }
          maxHeight="150px"
          maxWidth="150px"
          sx={{
            borderRadius: "50%",
            top: "50%",
            left: "50%",
            transform: `translate(-50%,-50%)`,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </Box>
    </Backdrop>
  );
}
