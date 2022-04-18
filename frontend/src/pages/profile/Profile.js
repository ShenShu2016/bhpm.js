import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import BazarButton from "../../components/BazarButton";
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import { Box, Typography, Card, IconButton, Drawer } from "@mui/material";
import Loading from "../../components/Loading";
import FlexBox from "../../components/FlexBox";
import { Link } from "react-router-dom";
import ProfileEditor from "./ProfileEditor";
import EditIcon from '@mui/icons-material/Edit';
import { Small } from "../../components/Typography";
import TableRow from "../../components/TableRow";
import Navigator from "./Navigator";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { getUserProfile } from "../../redux/slice/profileSlice";
import ProfileUser from "./profileUser";


const Profile = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { username } = useSelector((state) => state.userAuth.user);
  const { user, getProfileStatus } = useSelector((state) => {
    return state.profile;
  });

  const EditProfileButton = styled(BazarButton)({
    background: 'rgba(239,83,80,0.1)',
    border: 'none',
    '&:hover': {
      background: 'rgba(239,83,80,0.2)',
      border: 'none',
    },
   })

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

  const toggleDrawer = (status) => {
    setIsMenuOpen(status);
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: '32px 0' }}>
      {user === null ? (
        <Box sx={{
          height: '500px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
            <NoAccountsIcon sx={{ height: 100, width: 100 }} color="error"></NoAccountsIcon>
            <Typography sx={{ my: "2rem", fontSize: "20px", fontWeight: "bold", textAlign: 'center' }}>
              You have no profile infomation yet, please create !
            </Typography>
            <EditProfileButton
              color="primary"
              variant="outlined"
              component={Link}
              to="/profile/create"
            >
            Create new profile
          </EditProfileButton>
        </Box>
      ) : (
        getProfileStatus === 'succeeded' ?
        (<>
        <Box sx={{ display: 'flex', width: '85%', minWidth: '400px' }}>
          {
            // 当屏幕宽度小于600的时候 不在左边展示navigator 而是点击按钮后弹出
            window.outerWidth >= 600 ? (
              <Box sx={{ width: 320, maxWidth: '20%' }}>
                <Card sx={{ width: "100%", height: "100%" }}>
                  <Navigator selectedName="profile"></Navigator>
                </Card>
              </Box>
            ) : (
              null
            )
          }
          <Box sx={{ flex: '4', p: '0px 12px' }}>
            <Box sx={{ 
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between' 
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PersonIcon sx={{ fontSize: 30 }} color="primary"></PersonIcon>
                <Typography sx={{ fontSize: 25, fontWeight: 600, marginLeft: '20px' }}>
                  My Profile
                </Typography>
              </Box>
              <EditProfileButton
                color="primary"
                sx={{ marginLeft: 'auto' }}
                variant="outlined"
                startIcon={<EditIcon />}
                onClick={handleClickOpen}
              >
                Edit Profile
              </EditProfileButton>
              <IconButton
                sx={{ display: window.outerWidth < 600 ? 'block' : 'none' }}
                onClick={() => toggleDrawer(true)}
              >
                <MoreVertIcon />
              </IconButton>
            </Box>
            <Box sx={{m: '12px 0'}}>
              <Card sx={{p: '12px 2rem'}}>
                  <ProfileUser user={user} editable={false}></ProfileUser>
              </Card>
            </Box>
            <TableRow
              sx={{ p: "0.75rem 2rem" }}
              onClick={handleClickOpen}
            >
              <Box>
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
              </Box>
              <Box>
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
              
              </Box>
            <Box>
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
            </Box>
            </TableRow>
            <ProfileEditor open={open} handleClose={handleClose} user={user} />
            <Drawer
              open={isMenuOpen}
              onClose={() => toggleDrawer(false)}
            >
              <Box sx={{ p: '8px 24px 0 0' }}>
                <Navigator selectedName="profile"></Navigator>
              </Box>
            </Drawer>
          </Box>
        </Box>
        
        </>) : (<Loading></Loading>)
      )}
    </Box>
  );
};

export default Profile;
