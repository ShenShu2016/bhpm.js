/*
 * @Author: Shen Shu
 * @Date: 2022-04-14 22:12:32
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-24 01:08:37
 * @FilePath: \bhpmJS\frontend\amplify\backend\function\bhpmjs10bca66010bca660PostConfirmation\src\custom.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
var aws = require("aws-sdk");
var ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
  // insert code to be executed by your lambda trigger
  let date = new Date();
  console.log("event", event);
  if (
    event.request.userAttributes.sub &&
    event.triggerSource !== "PostConfirmation_ConfirmForgotPassword"
  ) {
    let params = {
      Item: {
        __typename: { S: "UserInfo" },
        id: { S: event.userName },
        username: { S: event.userName },
        email: { S: event.request.userAttributes.email },
        createdAt: { S: date.toISOString() },
        updatedAt: { S: date.toISOString() },
      },
      TableName: process.env.UserInfo_Table_Name,
    };

    try {
      await ddb.putItem(params).promise();
      console.log("添加到DynamoDB 成功！");
    } catch (error) {
      console.log(error);
    }
  }
  return event;
};
