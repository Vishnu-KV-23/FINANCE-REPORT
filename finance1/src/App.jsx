// app.jsx
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Admin from './components/Admin'
import Dashboard from './components/Dashboard'
import AdminDashboard from './components/AdminDashboard'
import Add from './components/Add'
import Home from './components/Home'
import Edit from './components/Edit'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/dashboard/add" element={<Add />} />
        <Route path="/dashboard/edit" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
