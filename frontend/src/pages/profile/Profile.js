import { Avatar, Button, Card, Grid, Typography } from "@mui/material";
import { H3, H5, Small } from "../../components/Typography";

import { Box } from "@mui/system";
import FlexBox from "../../components/FlexBox";
import { Link } from "react-router-dom";
import Person from "@mui/icons-material/Person";
import React from "react";
import TableRow from "../../components/TableRow";
import { format } from "date-fns";

const Profile = () => {
  return (
    <Box sx={{ p: "1rem" }}>
      <TableRow
        sx={{
          p: "0.75rem 1.5rem",
        }}
        component={Link}
        to="/profile/edit"
      >
        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            姓名
          </Small>
          <span>Ralph</span>
        </FlexBox>
        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            公司名稱
          </Small>
          <span>Edwards</span>
        </FlexBox>
        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            地址
          </Small>
          <span>ralfedwards@email.com</span>
        </FlexBox>
        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            傳真
          </Small>
          <span>+1983649392983</span>
        </FlexBox>
        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            身份證/護照號碼
          </Small>
          <span>+1983649392983</span>
        </FlexBox>

        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            職稱
          </Small>
          <span>+1983649392983</span>
        </FlexBox>
        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            聯絡電話
          </Small>
          <span>+1983649392983</span>
        </FlexBox>
        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            電子信箱
          </Small>
          <span>+1983649392983</span>
        </FlexBox>
      </TableRow>
    </Box>
  );
};

export default Profile;
