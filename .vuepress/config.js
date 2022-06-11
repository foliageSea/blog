module.exports = {
  base: '/blog/',
  "title": "foliageSea",
  // "description": "foliageSea's Blog",
  // 输出路径
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.png"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    // 关闭404公益广告
    noFoundPageByTencent: false,
    // 子侧边栏
    subSidebar: 'auto',
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      // {
      //   "text": "TimeLine",
      //   "link": "/timeline/",
      //   "icon": "reco-date"
      // },
      {
        "text": "文章",
        "icon": "reco-message",
        "link": "/docs/",
        "items": [
          {
            "text": "Vue.js",
            "link": "/docs/Vue.js/01-Vue.js"
          },
          // {
          //   "text": "Vue.js-2",
          //   "link": "/docs/Vue.js-2/"
          // },
        ]
      },
      // {
      //   "text": "Contact",
      //   "icon": "reco-message",
      //   "items": [
      //     {
      //       "text": "GitHub",
      //       "link": "https://github.com/recoluan",
      //       "icon": "reco-github"
      //     }
      //   ]
      // }

    ],
    "sidebar": {
      "/docs/Vue.js/": [
        "01-Vue.js",
        "02-Vue.js",
        "03-Vue.js",
        "04-Vue.js",
        "05-Vue.js",
        "vuerc",
      ],
      // "/docs/Vue.js-2/": [
      //   "01-Vue.js",
      // ],
    },
    "type": "blog",
    "blogConfig": {
      // "category": {
      //   "location": 2,
      //   "text": "Category"
      // },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    // "friendLink": [
    //   {
    //     "title": "午后南杂",
    //     "desc": "Enjoy when you can, and endure when you must.",
    //     "email": "1156743527@qq.com",
    //     "link": "https://www.recoluan.com"
    //   },
    //   {
    //     "title": "vuepress-theme-reco",
    //     "desc": "A simple and beautiful vuepress Blog & Doc theme.",
    //     "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
    //     "link": "https://vuepress-theme-reco.recoluan.com"
    //   }
    // ],
    "logo": "/logo.png",
    "search": false,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "foliageSea",
    "authorAvatar": "/avatar.jpg",
    // "record": "xxxx",
    // "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": false,
  }
};

