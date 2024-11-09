import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Amplify } from 'aws-amplify'
import awsExports from './aws-exports'
import { withAuthenticator } from '@aws-amplify/ui-react'

Amplify.configure(awsExports)

const root = ReactDOM.createRoot(document.getElementById('root'))
const AppWithAuth = withAuthenticator(App)

root.render(
  <React.StrictMode>
    <AppWithAuth />
  </React.StrictMode>
)

reportWebVitals()
