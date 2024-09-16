import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase'; // Make sure this is the correct import for auth
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'; // Import required auth functions

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Use navigate hook from react-router-dom to redirect after successful login or registration

    const signIn = (e) => {
        e.preventDefault();
        
        // Firebase sign-in logic
        signInWithEmailAndPassword(auth, email, password)
            .then((authUser) => {
                // Redirect to homepage after successful login
                navigate('/');
            })
            .catch((error) => alert(error.message));
    };

    const register = (e) => {
        e.preventDefault();

        // Firebase registration logic
        createUserWithEmailAndPassword(auth, email, password)
            .then((authUser) => {
                // Redirect to homepage after successful registration
                if (authUser) {
                    navigate('/');
                }
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt='amazon logo'
                />
            </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type='submit'
                        onClick={signIn}
                        className='login__signInButton'
                    >
                        Sign In
                    </button>
                </form>
                <p>
                    By signing-in you agree to AMAZON's Conditions of Use & Sale.
                    Please see our Privacy Notice, our Cookies Notice, and our
                    Interest-Based Ads Notice.
                </p>
                <button
                    onClick={register}
                    className='login__registerButton'
                >
                    Create your Amazon Account
                </button>
            </div>
        </div>
    );
}

export default Login;
 