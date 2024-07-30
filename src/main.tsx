import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// root要素を取得
const root = document.getElementById('root');
// root要素が見つからない場合はエラーをスローする
if (root === null) {
  throw new Error('root element not found');
}
// root要素にAppコンポーネントをレンダリング
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
