import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Testingpage from './testingpage.jsx'
import Headerpage from './header.jsx'
import Addition from './addition.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navpage from './navpage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Navpage />
    <Testingpage />
    <Headerpage />
    <Addition /> */}
    <App/>
  </StrictMode>,
)
