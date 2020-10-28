import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// component: HTML을 반환하는 함수
// jsx: javascript 안에 HTML, component를 만들고 어떻게 사용하는지에 대한 것...
// react application은 한 번에 하나의 compoenent만 렌더링할 수 있음
// react는 재사용 가능한 component를 만들 수 있음
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

