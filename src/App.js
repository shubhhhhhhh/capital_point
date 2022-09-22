import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './auth/signup';
import Header from './constant/Header';
import MainContext from './context/contextGlobal';

function App() {
  return (

    <MainContext>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Signup />} />
        </Routes>
      </Router>
    </MainContext>

  )
}

export default App;
