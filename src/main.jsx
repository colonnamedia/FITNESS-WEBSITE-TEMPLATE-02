import React from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import App from './NextApp.jsx';
import './styles.css';
import './next.css';
(document.getElementById('root').hasChildNodes() ? { render: (node) => hydrateRoot(document.getElementById('root'), node) } : createRoot(document.getElementById('root'))).render(<App/>);

