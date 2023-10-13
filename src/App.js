import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AuthContext, { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './utils/PrivateRoute';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact element={<PrivateRoute />}>
            <Route exact path='/' element={<HomePage />} /> 
          </Route>
          <Route path="/login" element={<LoginPage />} />    
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
