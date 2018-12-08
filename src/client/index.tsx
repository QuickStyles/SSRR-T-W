import * as React from 'react';
import RouterConfig from './RouterConfig';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
// import reducers from './reducers';
// declare global {
//   interface Window {
//     __PRELOADED_STATE__: any;
//     __REDUX_DEVTOOLS_EXTENSION__: any;
//   }
// }

// const state = window.__PRELOADED_STATE__;

// delete window.__PRELOADED_STATE__;
// hydrate(
//   <Provider store={createStore(
//     reducers,
//     state,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   )}>
//     <BrowserRouter>
//       <RouterConfig/>
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById('site'),
//   () => {
//     console.log('hydrate complete!');
//   },
// );

hydrate(
  <BrowserRouter>
    <RouterConfig/>
  </BrowserRouter>,
  document.getElementById('site'),
  () => {
    console.log('hydrate complete')
  }
)