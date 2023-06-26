import React from 'react';
import ReactDOM from 'react-dom/client';
import FirstApp from './FirstApp';
import './style.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title="Daniel" subtitle="Bienvenido"/>
    </React.StrictMode>
)
