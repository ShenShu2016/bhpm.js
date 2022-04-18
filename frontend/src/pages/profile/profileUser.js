/*
 * @Author: 李佳修
 * @Date: 2022-04-18 19:07:02
 * @LastEditTime: 2022-04-18 19:28:51
 * @LastEditors: 李佳修
 * @FilePath: /bhpmJS/frontend/src/pages/profile/profileUser.js
 */
import { Box, Typography, Avatar } from "@mui/material";

const ProfileUser = (props) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Avatar
                alt={props.user.name}
                src=""
                sx={{ width: '60px', height: '60px' }}
            />
            <Box sx={{ 
                display: 'flex',
                p: '0 16px',
                flexDirection: "column",
                justifyContent: 'center' 
            }}>
                <Typography sx={{ fontSize: 25, fontWeight: 600, lineHeight: "30px" }}>
                    {props.user.name || 'user name'}
                </Typography>
                <Typography sx={{ fontSize: 12, fontWeight: 600, color: '#808080' }}>
                    {props.user.email || 'user_123@test.com'}
                </Typography>
            </Box>
        </Box>
    )
};

export default ProfileUser;