import React from 'react';
import ReactDom from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from '../src/components/app.js'
import reducer from './reducer';

// import Counter from './components/counter';
// import * as actions from './actions';
// import { inc, dec, rnd } from './actions';

// import { bindActionCreators, createStore } from 'redux';

// REact


// REDUX на обычном js
      // упрощенная версия reducer  на js показывающая основной принцип
      //проверка на undefined и возрат первоначального значения  или же задать параметры по умолчанию в (state = 0,action)

      // const reducer = ( state = 0, action) => {
      //   switch (action.type) {
      //     case 'INC':
      //       return state + 1;
      //     case 'DEC' :
      //       return state - 1;
      //     case 'RND' :
      //       return state + action.payload;
      //     default :
      //       return state ;
      //   };
      // };
      // let state = reducer(undefined,{});

      // store.subscribe ( () => {} ) -выводит нотификацию при изменении store
      // store.subscribe(() => {
      //   console.log (store.getState());
      // })

      // метод store.getState() -выводит  нынешнее состояние state внутри store
      // console.log( store.getState() );

      // // метод store.dispatch ( action ) -выполняет действия над state c перезаписью
      // store.dispatch( {type: 'INC'} );
      // store.dispatch( {type: 'INC'} );

      // action creator
      // const inc = () => {
      //   return { type: 'INC' };
      // };
      // const dec = () => ( { type: 'DEC' } );
      // const rnd = (payload) => ( { type: 'RND', payload } );

      // создаеv Store
      // const store = createStore(reducer);
      // const { dispatch } = store;

      // const bindActionCreator = (creator ,dispatch) => (...arg) =>  dispatch(creator(...arg))

      // без bindActionCreator
      // const incDispatch = () => dispatch ( inc() );
      // const decDispatch = () => dispatch ( dec() );
      // const rndDispatch = (payload) => dispatch ( rnd(payload) );

      // const incDispatch = bindActionCreator( inc,dispatch )
      // const decDispatch = bindActionCreator( dec, dispatch )
      // const rndDispatch = bindActionCreator( rnd, dispatch );


      // если передавать хначения  action creator по отдельности
      // const { incDispatch, decDispatch, rndDispatch } =bindActionCreators ( {
      //   incDispatch: inc,
      //   decDispatch: dec,
      //   rndDispatch: rnd,
      // }, dispatch )

      // // если передаем значения action creator как obj {}
      // const { inc, dec, rnd } =bindActionCreators ( actions ,dispatch );

      // document
      //   .getElementById('inc')
      //   .addEventListener( 'click',  inc );

      // document
      //   .getElementById('dec')
      //   .addEventListener ('click', dec )

      // document
      //   .getElementById('rnd')
      //   .addEventListener('click', () => {
      //     const payload = Math.floor(Math.random()*9)
      //     // store.dispatch ( { type: 'RND',  payload, } );
      //     rnd(payload)
      //   });

      //   const update = () => {
      //     document
      //     .getElementById('counter')
      //     .innerHTML = store.getState();
      //   }

      //   store.subscribe(update);

// REDUX - React

const store = createStore(reducer);

ReactDom.render(
  <Provider store= {store}>
    <App />
  </Provider> ,
  document.getElementById('root')
);
