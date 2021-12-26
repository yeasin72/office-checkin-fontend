import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Sidebar from './Sidebar/Sidebar';
import Dashboard from './Dashboard/Dashboard';
import Checkin from './Checkin/Checkin';
import Checkout from './Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
          <>
            <Sidebar />
            <Dashboard />
          </>} />
          <Route path="/check-in" element={
            <>
              <Sidebar />
              <Checkin />
            </>
          } />
          <Route path="/check-out" element={
            <>
              <Sidebar />
              <Checkout />
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
