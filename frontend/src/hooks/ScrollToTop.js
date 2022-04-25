/*
 * @Author: Shen Shu
 * @Date: 2022-04-24 22:02:53
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-24 22:08:37
 * @FilePath: \bhpmJS\frontend\src\hooks\ScrollToTop.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
