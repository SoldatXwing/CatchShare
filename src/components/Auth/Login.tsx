import React, { useState } from 'react';
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from 'react-router-dom';
import { Button } from "../UI/Button";
import Input from "../UI/Input";
import { FcGoogle } from "react-icons/fc";

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [generalError, setGeneralError] = useState<string | null>(null);
  const { login, googleSignIn } = useAuth();
  const navigate = useNavigate();

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setEmailError(null);
    setPasswordError(null);
    setGeneralError(null);

    let isValid = true;
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError('Invalid email format');
      isValid = false;
    }
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err: any) {
      setGeneralError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    setGeneralError(null);
    try {
      await googleSignIn();
      navigate('/dashboard');
    } catch (err: any) {
      setGeneralError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Log In</h2>
        {generalError && <p className="text-red-500 text-sm mb-4">{generalError}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError}
            />
          </div>
          <Button type="submit" variant="primary" className="w-full">
            Log In
          </Button>
        </form>
        <div className="mt-4 flex justify-center text-sm text-gray-600">
          <Link to="/register" className="hover:text-gray-800">
            Don't have an account? Register
          </Link>
        </div>
        <div className="mt-6">
          <Button
            variant="secondary"
            className="w-full flex justify-center items-center space-x-2"
            onClick={handleGoogleSignIn}
          >
            <FcGoogle size={24} />
            <span>Log In with Google</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
