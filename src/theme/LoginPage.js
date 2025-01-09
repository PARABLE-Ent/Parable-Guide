import React from 'react';
import { signInWithGoogle } from './firebase';
import '../css/login.css';

export default function LoginPage() {
    return (
        <div className='login'>
            <div className="login__container">
                <img
                    src="/img/Parable_Logo_v1.png"
                    alt="Logo"
                    className="login__logo"
                />
                <h1 className="login__title"> Parable Guide </h1>
                <button
                className="login__btn login__google"
                onClick={signInWithGoogle}
                >
                    Sign in with Google
                </button>
        </div>
    </div>
    );
}