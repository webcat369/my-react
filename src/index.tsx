import React from 'react'
import ReactDOM from 'react-dom/client'
import BaseRouter from './router/index'

// 方式一
// const root = ReactDOM.createRoot(document.getElementById('root')!)
// root.render(<App/>)

// 方式二
// ReactDOM.render(<App/>, document.getElementById('root'))

// 方式三
// ReactDOM.createRoot(document.getElementById('root')!).render(<App/>)


ReactDOM.createRoot(document.getElementById('root')!).render(<BaseRouter/>)
