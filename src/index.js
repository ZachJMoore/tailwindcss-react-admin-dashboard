import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';
import App from './components/App';
import { BrowserRouter } from "react-router-dom";
import { unregister } from './registerServiceWorker';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
unregister();
