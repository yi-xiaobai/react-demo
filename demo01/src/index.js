

// react核心包
import React from 'react'
// react 操作dom的包
import ReactDOM from 'react-dom/client'
// import ReactDOM from 'react-dom'

// 引用当前目录下app组件
import App from './App'


// ReactDOM.render(<App/>,document.getElementById('root'))

// 创建根组件  id = root的节点
const root = ReactDOM.createRoot(document.getElementById("root"))

// 渲染
root.render(
    <App />
)