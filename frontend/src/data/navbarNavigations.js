const navbarNavigations = [
  {
    title: "最新拍賣",
    url: "/vendor/account-settings",
  },
  {
    title: "拍賣歷史",
    url: "/auction/history",
  },
  {
    title: "精品",
    child: [
      {
        title: "未來精品",
        url: "/vendor/dashboard",
      },
      {
        title: "當前精品",
        url: "/vendor/dashboard",
      },
      {
        title: "歷史精品",
        url: "/vendor/dashboard",
      },
    ],
  },
  {
    title: "新聞中心",
    url: "/vendor/account-settings",
  },
];

export default navbarNavigations;
