import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Sidebar from './Sidebar/Sidebar';
import Dashboard from './Dashboard/Dashboard';
import Checkin from './Checkin/Checkin';

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
