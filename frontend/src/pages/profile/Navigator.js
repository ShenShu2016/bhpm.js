/*
 * @Author: 李佳修
 * @Date: 2022-04-18 17:13:43
 * @LastEditTime: 2022-04-18 18:33:12
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
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import { Box } from "@mui/material";


// tab的选择需要和路由匹配，selectedName是父组件当路由切换时传过来的
// 通过selectedName和option中每一项的name匹配，找到哪一个tab是被选中的
const Navigator = ({ selectedName }) => {

    const options = [{
        isTitle: true,
        element: (<span>DASHBOARD</span>)
    },
    {
        name: 'cut',
        element: (
            <>
                <ListItemIcon>
                    <ContentCut
                        color={selectedName === 'cut' ? 'primary' : ''}
                        fontSize="small" 
                    />
                </ListItemIcon>
                <ListItemText>Cut</ListItemText>
                <Typography variant="body2" color="text.secondary">
                    ⌘X
                </Typography>
            </>
            
        )
    },{
        name: 'copy',
        element: (
            <>
                <ListItemIcon>
                    <ContentCopy
                        color={selectedName === 'copy' ? 'primary' : ''}
                        fontSize="small"
                    />
                </ListItemIcon>
                <ListItemText>Copy</ListItemText>
                <Typography variant="body2" color="text.secondary">
                    ⌘C
                </Typography>
            </>
        )
    }, {
        name: 'paste',
        element: (
            <>
                <ListItemIcon>
                    <ContentPaste
                        color={selectedName === 'paste' ? 'primary' : ''}
                        fontSize="small"
                    />
                </ListItemIcon>
                <ListItemText>Paste</ListItemText>
                <Typography variant="body2" color="text.secondary">
                    ⌘V
                </Typography>
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
    }, {
        name: 'web_clipboard',
        element: (
            <>
                <ListItemIcon>
                    <Cloud
                        color={selectedName === 'web_clipboard' ? 'primary' : ''}
                        fontSize="small" 
                    />
                </ListItemIcon>
                <ListItemText>Web Clipboard</ListItemText>
            </>
        )
    }]
    const selection = options.find((item) => item.name === selectedName);
    if (selection) {
        selection.isSelected = true;
    }

    const handleItemClicked = (content, index) => {
        console.log(content, index)
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