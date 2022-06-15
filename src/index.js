/*
 * @Author: WilliamXie 854933448@qq.com
 * @Date: 2022-06-15 19:59:29
 * @LastEditors: WilliamXie 854933448@qq.com
 * @LastEditTime: 2022-06-15 23:23:25
 * @FilePath: \WEB\OOCL\day11-13\counter-app\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './state';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  (
    <div>
      <h2> Clicked: <span id="num">0</span> times</h2>
      <button onClick={()=>increment()}>+</button>
      <button onClick={()=>decrement()}>-</button>
      <button onClick={()=>incrementIfOdd()}>increment if odd</button>
      <button onClick={()=>incrementAsync()}>increment async</button>
    </div>
  ),
  root
);

store.subscribe(()=>{
  document.getElementById('num').innerHTML = store.getState()
})

function increment(){
  store.dispatch({ type: 'INCREMENT' });
}

function decrement(){
  store.dispatch({ type: 'DECREMENT' });
}

function incrementIfOdd(){
  if(parseInt(store.getState()) % 2 === 1){
    store.dispatch({ type: 'INCREMENT' });
  }
}

function incrementAsync(){
  setTimeout(()=>{
    store.dispatch({ type: 'INCREMENT' });
  },1000)
}

