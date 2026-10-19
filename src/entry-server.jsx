import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './NextApp.jsx';
export const defaultPublicContent = {};
export const render = () => renderToString(<App />);
