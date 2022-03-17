//import LanguageDetector from "i18next-browser-languagedetector";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector

  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          description: {
            part1: "Login/Register",
            login: "Bowell Login",
            part3: "Log in with email & password",
            Login: "Login",
            Password: "Password",
            Email: "Email",
            donthaveaccount: "Don't have account?",
            signup: "Sign Up",
            bowellsignup: "Bowell Sign Up",
            Phone: "Phone",
            AlreadyHaveAccount: "Already have account?",
            Logout: "Logout",
            寶華介紹: "Bowell Information",
            團隊介紹: "Team Information",
            服務項目: "Service Information",
            服務規則: "Service Rules",
            隱私條款: "Privacy Policy",
            最新拍賣: "Latest Auction",
            拍賣歷史: "Auction History",
            精品: "Premium",
            新聞中心: "News",
          },
        },
      },
      中文: {
        translation: {
          description: {
            part1: "登錄/註冊",
            login: "寶華 登錄",
            part3: "用賬號&密碼登錄",
            Login: "登錄",
            Password: "密碼",
            Email: "郵箱",
            donthaveaccount: "沒有賬號？",
            signup: "註冊",
            bowellsignup: "寶華 註冊",
            Phone: "手機",
            AlreadyHaveAccount: "已經有賬戶了？",
            Logout: "退出登錄",
            最新拍賣: "最新拍賣",
            拍賣歷史: "拍賣歷史",
            精品: "精品",
            新聞中心: "新聞中心",
          },
        },
      },
    },
  });

export default i18n;
