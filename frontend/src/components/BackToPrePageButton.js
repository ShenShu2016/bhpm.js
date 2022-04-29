/*
 * @Author: Shen Shu
 * @Date: 2022-04-29 13:55:30
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-29 14:02:08
 * @FilePath: \bhpmJS\frontend\src\components\BackToPrePageButton.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import FlexBox from "./FlexBox";
import { IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackToPrePageButton() {
  const navigate = useNavigate();
  return (
    <FlexBox alignItems="center" mb={2}>
      <IconButton onClick={() => navigate(-1)}>
        <ArrowCircleLeftOutlinedIcon fontSize="normal" />
      </IconButton>
    </FlexBox>
  );
}
