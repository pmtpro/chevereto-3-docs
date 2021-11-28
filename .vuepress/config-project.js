module.exports = {
    title: 'Chevereto-Free',
    description: 'Documentation for Chevereto-Free image hosting software',
    head: [
        ['link', {
            rel: 'icon',
            href: `/icons/android-chrome-512x512.png`
        }],
        ['link', {
            rel: 'manifest',
            href: '/manifest.json'
        }],
        ['meta', {
            name: 'theme-color',
            content: '#23a8e0'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ['link', {
            rel: 'apple-touch-icon',
            href: '/icons/android-chrome-512x512.png'
        }],
        ['link', {
            rel: 'mask-icon',
            href: '/icons/android-chrome-512x512.png',
            color: '#3eaf7c'
        }],
        ['meta', {
            name: 'msapplication-TileImage',
            content: '/icons/android-chrome-512x512.png'
        }],
        ['meta', {
            name: 'msapplication-TileColor',
            content: '#000000'
        }]
    ],
    themeConfig: {
        logo: '/logo.png',
        repo: 'rodber/chevereto-free',
        docsRepo: 'rodber/chevereto-free-docs',
        docsBranch: 'main',
        smoothScroll: true,
        editLinks: true,
        lastUpdated: true,
        // algolia: {
        //     apiKey: '250992199b7863078c8399e2638107af',
        //     indexName: 'chevereto',
        // }
    },
    plugins: [
        [
            // '@vuepress/google-analytics',
            // {
            // 'ga': 'UA-25384365-3'
            // }
        ]
    ]
};