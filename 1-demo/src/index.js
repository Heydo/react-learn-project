// 对内置ES6 api 做兼容处理
// 想兼容谁就导入谁
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/ie11'
// stable是必须要的
import "react-app-polyfill/stable"

import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.less'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>第一个空白的React项目</div>
  </React.StrictMode>
);