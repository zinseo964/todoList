import './App.css';
import TodoList from './todolist';
import React, { useState, useEffect } from 'react';

function App() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  // Date 객체를 문자열로 변환하는 함수
  const formatDateTime = (dateTime) => {
    const year = dateTime.getFullYear();
    const month = String(dateTime.getMonth() + 1).padStart(2, '0');
    const day = String(dateTime.getDate()).padStart(2, '0');
    const hours = String(dateTime.getHours()).padStart(2, '0');
    const minutes = String(dateTime.getMinutes()).padStart(2, '0');
    const seconds = String(dateTime.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  const formatDate = (dateTime, d) => {
    const year = dateTime.getFullYear();
    const month = String(dateTime.getMonth() + 1).padStart(2, '0');
    const day = String(dateTime.getDate() + d).padStart(2, '0');
    return `${year}-${month}-${day} `;
  }

  return (
    <div className="App">
      <header title='Today'>
        <div>
          <h1>TODAY : {formatDateTime(dateTime)}</h1>
        </div>
      </header>
     <div className='container'>
        <div className='horizontal-div'>
          <h1>Today : {formatDate(dateTime, 0)}</h1>
          <TodoList/>
        </div>
        <div className='horizontal-div'>
          <h1>{formatDate(dateTime, 1)}</h1>
          <TodoList />
        </div>
        <div className='horizontal-div'>
          <h1>{formatDate(dateTime, 2)}</h1>
          <TodoList/>
        </div>
      </div>
    </div>
  );
}

export default App;
