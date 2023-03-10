import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CurrentEmployee from './pages/CurrentEmployees'
import Login from './pages/Login'
import Home from './pages/Home'
import PageError from './pages/PageError'
import { Provider } from 'react-redux'
import { store } from './redux/employees.slice.js'
import './App.css'
import Header from './components/Header'

/**
 * Creation of pages routes.
 * @returns {JSX.Element} App component
 */
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/CurrentEmployee" element={<CurrentEmployee />} />
          <Route path="*" element={<PageError />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
