import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import { Root } from './Root.tsx';

import './index.css';
import {store} from "./api/store.tsx";
import {PrimeReactProvider} from "primereact/api";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <PrimeReactProvider>
            <Root />
        </PrimeReactProvider>
    </Provider>
);
