import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from "./components/Router";
import {Provider} from "react-redux";
import {store} from '@context/store'
import './i18n'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Suspense fallback={<div>Load</div>}>
            <Provider store={store}>
                <Router/>
            </Provider>
        </Suspense>
    </React.StrictMode>,
)
