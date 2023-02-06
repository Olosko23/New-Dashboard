import React from 'react'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Recovery from './pages/Recovery';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './pages/ProtectedRoute';
import {AuthContextProvider} from './context/AuthContext';

export default function App() {

  return (
    <div className="">
      <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={
            <ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recovery" element={<Recovery />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </AuthContextProvider>
      <Footer />
    </div>
  )
}
