/*
 * @Author: 李佳修
 * @Date: 2022-04-18 19:07:02
 * @LastEditTime: 2022-04-26 19:20:48
 * @LastEditors: Shen Shu
 * @FilePath: \bhpmJS\frontend\src\pages\profile\profileUser.js
 */

import { Avatar, Box, Typography } from "@mui/material";

const ProfileUser = (props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Avatar
        alt={props.user.name}
        src=""
        sx={{ width: "60px", height: "60px" }}
      />
      <Box
        sx={{
          display: "flex",
          p: "0 16px",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontSize: 25, fontWeight: 600, lineHeight: "30px" }}>
          {props.user.name}
        </Typography>
        <Typography sx={{ fontSize: 12, fontWeight: 600, color: "#808080" }}>
          {props.user.email}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfileUser;
