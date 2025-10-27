import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './useEffectHook';

const root = ReactDOM.createRoot(document.getElementById('root'));

function unmount() {
    root.render(<p>Component unmounted</p>);
}

root.render(
    <>
        <App />
        <button onClick={unmount}>unmount App component</button>
    </>
);