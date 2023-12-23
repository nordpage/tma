import React from 'react';
import ReactDOM from 'react-dom/client';
import { Root } from './Root.tsx';

import './index.css';
import WebApp from "@twa-dev/sdk";

WebApp.ready();
WebApp.expand();
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>,
);
