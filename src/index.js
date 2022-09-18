import React from 'react';
import { createRoot } from 'react-dom/client'; import './index.css';
import App from './App';
// import App from './App';
import './index.css';
import 'tachyons';
import { robots } from './robots';

// import registerServiceWorker from './registerServiceWorker';

createRoot(document.getElementById('root')).render(
    <App robots={robots} />
);

// registerServiceWorker();