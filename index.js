import React from 'react'
import  { createRoot }  from 'react-dom/client';
import App from './src/App.js'

const container = document.getElementById('board');
const root = createRoot(container);
root.render(<App/>);