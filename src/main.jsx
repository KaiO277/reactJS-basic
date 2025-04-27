import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './views/App'
import './styles/global.scss'
import ReactDOM from 'react-dom'
import React from 'react'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/reducers/rootReducer'

const reduxStore = createStore(rootReducer);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </StrictMode>,
)

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={reduxStore}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
