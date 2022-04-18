/*
 * @Author: 李佳修
 * @Date: 2022-04-16 11:49:33
 * @LastEditTime: 2022-04-16 11:50:58
 * @LastEditors: 李佳修
 * @FilePath: /bhpmJS/frontend/src/components/Loading.js
 */
import { Box, Typography, CircularProgress  } from "@mui/material";
import { blue } from "@mui/material/colors";

function Loading() {
    return (
        <>
            <Box sx={{
                height: "500px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"}}>
            <CircularProgress sx={{color: blue[600]}} size={60}/>
            <Typography sx={{ my: "2rem", fontSize: "20px", fontWeight: "bold" }}>Waiting...</Typography>
          </Box>
        </>
    )
}

export default Loading;