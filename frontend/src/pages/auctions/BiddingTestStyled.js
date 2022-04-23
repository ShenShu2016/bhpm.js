/*
 * @Author: 李佳修
 * @Date: 2022-04-22 17:20:56
 * @LastEditTime: 2022-04-23 08:06:07
 * @LastEditors: 李佳修
 * @FilePath: /bhpmJS/frontend/src/pages/auctions/BiddingTestStyled.js
 */
import { styled } from '@mui/material/styles';
import { Paper, Box } from "@mui/material";

export const TextPaper = styled(Paper)(({ theme }) => ({
    width: "49.5%",
    minWidth: "",
    marginBottom: "",
    [theme.breakpoints.down("sm")]: {
        minWidth: '350px',
        marginBottom: '16px'
    },
}));

export const TextPaperContainer = styled(Box)(({ theme }) => ({
    textAlign: "center",
    margin: '1rem 0',
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
        margin: 0,
    },
}));

export const LeftImgList = styled(Paper)(({ theme }) => ({
    height: '533px',
    width: '125px',
    marginRight: '8px',
    padding: '12px',
    [theme.breakpoints.down("sm")]: {
       display: 'none'
    },
}));

export const HistoryList = styled(Box)(({ theme }) => ({
    flex: 1,
    maxWidth: "70%",
    minWidth: "180px",
    maxHeight: "533px",
    overflow: "auto",
    padding: "0 16px",
    marginLeft: '8px',
    [theme.breakpoints.down("sm")]: {
        minWidth: "350px",
        marginLeft: '0px',
    },
}));