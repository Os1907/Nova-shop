import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { QueryClient ,QueryClientProvider } from 'react-query';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
let query = new QueryClient
root.render(
  <QueryClientProvider client={query}>
    <App />
  </QueryClientProvider>
);


reportWebVitals();
