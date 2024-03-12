import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import FeatureSection from './components/FeatureSection';
import Borrowing from './components/Borrowing';
import Individual from './components/Individual';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PasswordChange from './components/PasswordChange';
import SignUpConfirmation from './components/SignUpConfirmation';
import VerificationSuccess from './components/VerificationSuccess';
import MyBooks from './components/MyBooks';

function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  );
}

const AppInner = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/change-password' || location.pathname === '/my-books'

  return (
    <>
      {!isAuthPage && <NavBar />}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/change-password" element={<PasswordChange />} />
        <Route path="/signup-confirmation" element={<SignUpConfirmation />} />
        <Route path="/verify-success" element={<VerificationSuccess />} />
        <Route path="/mybooks" element={<MyBooks />} />
      </Routes>
      {!isAuthPage && (
        <>
          <FeatureSection />
          <Borrowing />
          <Individual />
          <BlogSection />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
