import React from 'react';
import ReactDOM from 'react-dom/client';

const App: React.FC = () => {
  return <h1>Hello, world!</h1>;
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);
