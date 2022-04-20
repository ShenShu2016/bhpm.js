import { Box } from "@mui/material";
import React from "react";

export default function ImageSlider({ lotNumber }) {
  return (
    <Box sx={{ width: "84px", px: "2px" }}>
      <img
        src={`https://bhpmjsaa65d4d2254e4b41a89df0d66c611dc0144251-prod.s3.us-west-1.amazonaws.com/public/auction1/${
          lotNumber - 1
        }_1.jpg`}
        alt="dsjfkls"
        style={{ width: "80px" }}
      />
      <Box sx={{ border: "2px", borderStyle: "solid" }}>
        <img
          src={`https://bhpmjsaa65d4d2254e4b41a89df0d66c611dc0144251-prod.s3.us-west-1.amazonaws.com/public/auction1/${
            lotNumber - 0
          }_1.jpg`}
          alt="dsjfkls"
          style={{ width: "80px" }}
        />
      </Box>
      <img
        src={`https://bhpmjsaa65d4d2254e4b41a89df0d66c611dc0144251-prod.s3.us-west-1.amazonaws.com/public/auction1/${
          lotNumber + 1
        }_1.jpg`}
        alt="dsjfkls"
        style={{ width: "80px" }}
      />
      <img
        src={`https://bhpmjsaa65d4d2254e4b41a89df0d66c611dc0144251-prod.s3.us-west-1.amazonaws.com/public/auction1/${
          lotNumber + 2
        }_1.jpg`}
        alt="dsjfkls"
        style={{ width: "80px" }}
      />
    </Box>
  );
}
