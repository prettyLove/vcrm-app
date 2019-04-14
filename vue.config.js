module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: '微信APP',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        subpage: 'src/main.js'
    },
    css: {
        // modules:false,
        // extract:true,
        sourceMap: false
    },
    // configureWebpack: config => {
    //     require('vux-loader').merge(config, {
    //         plugins: ['vux-ui']
    //     })
    //
    // },
    lintOnSave:
    process.env.NODE_ENV === 'production', //是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
    //设置为 true 时，eslint-loader 会将 lint 错误输出为编译警告。默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败。
    devServer:
        {
            port: 8080, // 端口号
            host: "127.0.0.1",
            disableHostCheck: true,
            https: false, // https:{type:Boolean}
            open: true, //配置自动启动浏览器
            hotOnly: true, // 热更新
            overlay:
                { //设置浏览器提示错误
                    warnings: true,
                    errors: true
                }
            ,
        }
    ,
    publicPath: process.env.NODE_ENV === 'production' ? './' : './',
    outputDir: undefined,
    assetsDir: undefined,
    productionSourceMap: false, //你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
    runtimeCompiler: true, //是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
//lintOnSave: false //取消eslint验证
}
;