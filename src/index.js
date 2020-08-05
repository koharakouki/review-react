import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App title="hi" message="this is message" />, document.getElementById('root'));

serviceWorker.unregister();
