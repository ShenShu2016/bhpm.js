/*
 * @Author: 李佳修
 * @Date: 2022-04-18 17:13:43
 * @LastEditTime: 2022-04-22 17:19:28
 * @LastEditors: 李佳修
 * @FilePath: /bhpmJS/frontend/src/pages/profile/Navigator.js
 */
import * as React from 'react';
import Divider from '@mui/material/Divider';
import PersonIcon from '@mui/icons-material/Person';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";


// tab的选择需要和路由匹配，selectedName是父组件当路由切换时传过来的
// 通过selectedName和option中每一项的name匹配，找到哪一个tab是被选中的
const Navigator = ({ selectedName }) => {

  const navigate = useNavigate();

  const options = [{
        isTitle: true,
        element: (<span>DASHBOARD</span>)
    },
    {
        name: 'myCollection',
        element: (
            <>
                <ListItemIcon>
                    <CollectionsBookmarkIcon
                        color={selectedName === 'myCollection' ? 'primary' : ''}
                        fontSize="small" 
                    />
                </ListItemIcon>
                <ListItemText>My Collection</ListItemText>
            </>
            
        )
    }, {
        isDivider: true
    }, {
        isTitle: true,
        element: (<span>ACCOUNT SETTINGS</span>)
    }, {
        name: 'profile',
        element: (
            <>
                <ListItemIcon>
                    <PersonIcon
                        color={selectedName === 'profile' ? 'primary' : ''}
                        fontSize="small"
                    />
                </ListItemIcon>
                <ListItemText>My Profile</ListItemText>
            </>
        )
    }]
    const selection = options.find((item) => item.name === selectedName);
    if (selection) {
        selection.isSelected = true;
    }

    const handleItemClicked = (content, index) => {
        console.log(content, index);
        if (content.name === 'myCollection') {
            navigate(`/profile/myCollection`, {
                replace: true,
            })
        }
    }

    return (
        <MenuList>
            {
                options.map((item, index) => (
                    item.isDivider ? (<Divider key={index} />) :
                    (
                        <MenuItem
                            key={index}
                            disabled={item.isTitle}
                            sx={{
                                fontSize: item.isTitle ? '12px' : '14px',
                                color: item.isSelected ? "primary.main" : "" 
                            }}
                            onClick={() => handleItemClicked(item, index)}
                        >   
                            <Box sx={{
                                display: item.isSelected ? 'block' : 'none',
                                position: 'absolute',
                                width: '3px',
                                height: '90%',
                                backgroundColor: 'primary.main',
                                left: 0
                            }}></Box>
                            {item.element}
                        </MenuItem>
                    )
                ))
            }
        </MenuList>
    )
};

export default Navigator;