/*
 * @Author: 李佳修
 * @Date: 2022-04-29 14:46:44
 * @LastEditTime: 2022-04-29 14:47:58
 * @LastEditors: 李佳修
 * @FilePath: /bhpmJS/frontend/src/pages/auth/ResetPassword.js
 */
import FlexBox from "../../components/FlexBox";
import Reset from "../../components/sessions/Reset";
import React from "react";  

const ResetPassword = () => {
    return (
        <>
            <FlexBox
                flexDirection="column"
                minHeight="100vh"
                alignItems="center"
                justifyContent="center"
            >
                <Reset />
            </FlexBox>
        </>
    );
}

export default ResetPassword;