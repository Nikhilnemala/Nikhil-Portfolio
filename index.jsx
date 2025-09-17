import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './App.jsx';
    import './styles.css';

    
    function postToParent(level, ...args) {
      if (window.parent !== window) {
        window.parent.postMessage(
          {
            type: 'iframe-console',
            level,
            args,
          },
          '*'
        );
      }
    }

    
    window.onerror = function (message, source, lineno, colno, error) {
      const errPayload = {
        message,
        source,
        lineno,
        colno,
        stack: error?.stack,
      };
      postToParent('error', '[Error_Caught]', errPayload);
    };

    
    window.onunhandledrejection = function (event) {
      postToParent('error', '[Error_Caught]', { reason: event.reason });
    };

    
    ['log', 'warn', 'info', 'error'].forEach((level) => {
      const original = console[level];
      console[level] = (...args) => {
        postToParent(level, ...args);
        original(...args);
      };
    });

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );