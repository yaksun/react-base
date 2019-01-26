const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')

const html_plugin=new HtmlWebpackPlugin({
    template:path.join(__dirname,'./src/index.html'),
    filename:'index.html'
})
module.exports={
    mode:'development',
    plugins:[
        html_plugin
    ]
}