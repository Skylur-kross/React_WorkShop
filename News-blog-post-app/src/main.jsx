import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import Card from './component/Card'
import App from './pagetest'

import Header from './component/header'
import Pagination from './component/pageination'

// import NewsArticleList from './component/readLater'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Header/> */}
    {/* <Card/> */}
    <App/>
    {/* <NewsApp/> */}
    
  </React.StrictMode>,
)