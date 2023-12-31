import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import { Root } from './Root.tsx';

import './index.css';
import {store} from "./api/store.tsx";
import {PrimeReactProvider} from "primereact/api";
import WebApp from "@twa-dev/sdk";

WebApp.ready();
WebApp.setHeaderColor(`#2C3E50`);
WebApp.setBackgroundColor(`#2C3E50`)
WebApp.expand();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <PrimeReactProvider>
            <Root />
        </PrimeReactProvider>
    </Provider>
);
