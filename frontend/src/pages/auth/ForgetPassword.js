/*
 * @Author: 李佳修
 * @Date: 2022-04-28 14:54:17
 * @LastEditTime: 2022-04-29 14:46:09
 * @LastEditors: 李佳修
 * @FilePath: /bhpmJS/frontend/src/pages/auth/ForgetPassword.js
 */
import FlexBox from "../../components/FlexBox";
import Forgot from "../../components/sessions/Forgot";
import React from "react";  

const ForgetPassword = () => {
    return (
        <>
            <FlexBox
                flexDirection="column"
                minHeight="100vh"
                alignItems="center"
                justifyContent="center"
            >
                <Forgot />
            </FlexBox>
        </>
    );
}

export default ForgetPassword;