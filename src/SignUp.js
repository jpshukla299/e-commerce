import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebase'; // Update the path based on your project structure
import { useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const SignUp = () => {
  const navigate = useNavigate();
  // State variables for email, password, etc.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    // Perform the user registration
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Handle success
        const user = userCredential.user;
        navigate('/login')
        console.log('User registered successfully:', user);

      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error during registration:', errorCode, errorMessage);
      });
  };

  return (
    <div className='bg-dark'
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
      <h2 style={{ color: 'white' }} >Register Now</h2>
      <form className="d-inline-block w-25 text-center" onSubmit={handleSignUp}>
        <div className="form-group">
          <label htmlFor="username">UserName</label>
          <input
            type="input"
            className="form-control"
            id="username"
            placeholder="UserName"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
