import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


//Added as test trying to connect the database
import express from 'express';

const app = express();

app.listen(8800,()=>{
    console.log("Connected to octopus-db!");
}

);