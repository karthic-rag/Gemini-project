import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contextprovider, { Context } from '../context/context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Contextprovider>
    <App/>
  </Contextprovider>,
)
