// src/components/LoginPopup.tsx

import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './LoginPopup.css';

interface LoginPopupProps {
  setShowLogin: (show: boolean) => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState<'Login' | 'Sign Up'>('Login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    academic_year:''
  });

  const onLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Do your login/signup logic here
    if (currState === 'Login') {
      console.log('Logging in with:', formData);
    } else {
      console.log('Signing up with:', formData);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="close-icon"
          />
        </div>

        <div className="login-popup-inputs">
          {currState === 'Sign Up' && (
            <>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
            name="academic_year"
            type="text"
            placeholder="Your academic year"
            required
            value={formData.academic_year}
            onChange={handleInputChange}
          /></>
          )}

          <input
            name="email"
            type="email"
            placeholder="Your email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />

          <input
            name="password"
            type="password"
            placeholder="Your password"
            required
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">
          {currState === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            By continuing, I agree to the{' '}
            <a href="/terms">terms of use</a> &{' '}
            <a href="/privacy">privacy policy</a>.
          </p>
        </div>

        {currState === 'Login' ? (
          <p>
            Create a new account?{' '}
            <span onClick={() => setCurrState('Sign Up')}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <span onClick={() => setCurrState('Login')}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
