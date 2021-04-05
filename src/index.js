import React from 'react'
import ReactDOM from 'react-dom'
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import App from './components/App'
import './index.css'
import './utils/typography'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/">
        <App />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
