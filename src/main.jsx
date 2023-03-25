import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {QueryClient, QueryClientProvider} from "react-query";
import Router from "./router/Router.jsx";
import './assets/styles/global.css'
import AuthGuard from "./router/Auth-guard.jsx";
import {Provider} from "react-redux";
import {store} from "./store/index.js";

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
    document.getElementById('root')
)

root.render(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <AuthGuard>
                <Router/>
            </AuthGuard>
        </QueryClientProvider>
    </Provider>
)


