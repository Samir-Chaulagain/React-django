// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
 // Adjust the path if necessary

// Use createRoot in React 18
const root = createRoot(document.getElementById('app'));
root.render(<App name='samir' />);
