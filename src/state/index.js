/*
 * @Author: WilliamXie 854933448@qq.com
 * @Date: 2022-06-15 22:40:04
 * @LastEditors: WilliamXie 854933448@qq.com
 * @LastEditTime: 2022-06-15 22:59:09
 * @FilePath: \WEB\OOCL\day11-13\counter-app\src\state\index.js
 */
import { createStore } from 'redux';

function counter(state = 0, action) {
  switch (action.type) {

    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

let store = createStore(counter)

store.subscribe(() => {
  console.log(store.getState());
})

export { store }