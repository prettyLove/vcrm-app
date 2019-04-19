module.exports = {
    presets: ["@vue/app"],
    plugins: [
        ['import', {
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: true
        }, 'vant'],
        ["import", {
            "libraryName": "mand-mobile",
            "libraryDirectory": "lib"
        }],
        [
            "component",
            {
                "libraryName": "mint-ui",
                "style": true
            }
        ]
    ]
};
