import React from 'react'
import ReactDOM from 'react-dom'

//创建虚拟DOM
const myh1=React.createElement('h1',null,'123345')

//渲染到页面
ReactDOM.render(myh1,document.getElementById('app'))