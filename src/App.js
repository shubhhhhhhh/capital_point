import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './auth/signup';
import Header from './constant/Header';
import MainContext from './context/contextGlobal';
import Dashboard from './component/dashboard/dashboard';


function App() {
  return (

    <MainContext>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </MainContext>

  )
}

export default App;
