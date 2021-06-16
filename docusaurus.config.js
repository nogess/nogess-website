module.exports = {
  title: '你想要来点兔子吗', // 网站标题
  tagline: '多年以后，奥雷连诺上校站在行刑队面前，准会想起父亲带他去参观冰块的那个遥远的下午。 ',
  url: 'https://nogess.github.io', // 网站的域名
  baseUrl: '/',  // 站点的根路径
  favicon: 'img/favicon_bart.ico', // 网站的 favicon 文件的 URL 链接
  organizationName: 'nogess', // Usually your GitHub org/user name. 拥有此源码仓库的 GitHub 用户或组织。
  projectName: 'blog', // Usually your repo name.
  themeConfig: { // 主题配置
    navbar: {
      title: 'nogess',
      logo: {
        alt: 'Logo',
        // src: 'img/logo.svg',
        src: 'img/via.png',
      },
      links: [
        // {
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
        // {to: 'blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/nogess',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Style Guide',
      //         to: 'docs/',
      //       },
      //       {
      //         label: 'Second Doc',
      //         to: 'docs/doc2/',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: 'blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/nogess',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} nogess, Inc. Built with docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // docs: {
        //   // It is recommended to set document id as docs home page (`docs/` path).
        //   homePageId: 'doc1',
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/',
        // },
        blog: {
          // showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
          path: './blog',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
