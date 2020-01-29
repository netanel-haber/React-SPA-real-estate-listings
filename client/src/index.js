import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/index.scss';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';


const root = document.getElementById('root');

ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>, root);

