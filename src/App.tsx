import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from '@/page/HomePage'
// import '@/assets/scss/normalize.scss'

const App = () => (
  <>
    <HomePage />
  </>
)

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(<App/>)
