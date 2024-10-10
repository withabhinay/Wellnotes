import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const GOOGLE_CLIENT_ID = "1029768483372-3veqgp0hu5284rl5335j194132395jn9.apps.googleusercontent.com"

root.render(
<React.StrictMode>
  <GoogleOAuthProvider clientId = {GOOGLE_CLIENT_ID}>
    <App />
  </GoogleOAuthProvider>
</React.StrictMode>
);
