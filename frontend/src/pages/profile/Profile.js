import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import BazarButton from "../../components/BazarButton";
import { Box } from "@mui/system";
import FlexBox from "../../components/FlexBox";
import { Link } from "react-router-dom";
import ProfileEditor from "./ProfileEditor";
import { Small } from "../../components/Typography";
import TableRow from "../../components/TableRow";
import { getUserProfile } from "../../redux/slice/profileSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.userAuth.user);
  const { user } = useSelector((state) => state.profile);
  console.log(user);
  useEffect(() => {
    if (!!username === true) {
      dispatch(getUserProfile({ username }));
    }
  }, [dispatch, username]);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ p: "1rem" }}>
      {user === null ? (
        <BazarButton
          color="primary"
          variant="contained"
          component={Link}
          to="/profile/create"
        >
          Create new profile
        </BazarButton>
      ) : (
        <>
          <TableRow
            sx={{
              p: "0.75rem 1.5rem",
            }}
            onClick={handleClickOpen}
          >
            <FlexBox flexDirection="column" p={1}>
              <Small color="grey.600" mb={0.5} textAlign="left">
                姓名
              </Small>
              <span>{user.name}</span>
            </FlexBox>
            <FlexBox flexDirection="column" p={1}>
              <Small color="grey.600" mb={0.5} textAlign="left">
                公司名稱
              </Small>
              <span>{user.companyName}</span>
            </FlexBox>
            <FlexBox flexDirection="column" p={1}>
              <Small color="grey.600" mb={0.5} textAlign="left">
                地址
              </Small>
              <span>{user.address}</span>
            </FlexBox>
            <FlexBox flexDirection="column" p={1}>
              <Small color="grey.600" mb={0.5} textAlign="left">
                傳真
              </Small>
              <span>{user.fax}</span>
            </FlexBox>
            <FlexBox flexDirection="column" p={1}>
              <Small color="grey.600" mb={0.5} textAlign="left">
                身份證/護照號碼
              </Small>
              <span>{user.idPassport}</span>
            </FlexBox>

            <FlexBox flexDirection="column" p={1}>
              <Small color="grey.600" mb={0.5} textAlign="left">
                職稱
              </Small>
              <span>{user.title}</span>
            </FlexBox>
            <FlexBox flexDirection="column" p={1}>
              <Small color="grey.600" mb={0.5} textAlign="left">
                聯絡電話
              </Small>
              <span>{user.phone}</span>
            </FlexBox>
            <FlexBox flexDirection="column" p={1}>
              <Small color="grey.600" mb={0.5} textAlign="left">
                聯絡電話2
              </Small>
              <span>{user.phone2}</span>
            </FlexBox>
            <FlexBox flexDirection="column" p={1}>
              <Small color="grey.600" mb={0.5} textAlign="left">
                電子信箱
              </Small>
              <span>{user.email}</span>
            </FlexBox>
          </TableRow>
          <BazarButton
            color="primary"
            variant="contained"
            onClick={handleClickOpen}
          >
            Edit
          </BazarButton>
        </>
      )}
      <ProfileEditor open={open} handleClose={handleClose} user={user} />
    </Box>
  );
};

export default Profile;
