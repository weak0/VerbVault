import React, { useState } from 'react';
import Logon from './Logon';
import './App.css';
import HomePage from './Home/HomePage';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleGetStarted = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleSubmitLogin = () => {
    handleCloseLogin();
  };

  const user = localStorage.getItem('user');

  return (
    <>
      {!user ? (
        <div className="landingpage">
          <div className="landingpage-description">
            <h1>VerbVault</h1>
            <h2>Learn English Verbs</h2>
            <p>VerbVault is a simple app to help you learn English verbs.</p>
            <p>The app is under development, so please be patient... </p>
            <button onClick={handleGetStarted}>Get Started</button>
          </div>
          <div className="landingpage-actions">
            <button>Sign In</button>
            <button>Sign Up</button>
          </div>
        </div>
      ) : (
        <HomePage />
      )}

      {showLogin && (
        
          <div className="modal-content">
            <div className="centered-modal">
              <Logon onSubmit={handleSubmitLogin} onClose={handleCloseLogin} />
            </div>
          </div>

      )}
    </>
  );
}

export default App;