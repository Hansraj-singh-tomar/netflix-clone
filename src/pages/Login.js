import React, { useState, useRef } from 'react'

import Header from '../components/Header';

// Constants
import { USER_IMG, BG_IMG } from '../utils/constants';

// Input validation
import { checkValidData } from '../utils/validate';

// Firebase 
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

// Redux-Toolkit
import { useDispatch } from 'react-redux';
import { addUser } from '../Redux/userSlice';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const dispatch = useDispatch();

    async function handleBtnClick(e) {
        e.preventDefault();

        const error = checkValidData(email.current.value, password.current.value)
        setErrorMessage(error);

        if (error) return;

        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: USER_IMG
                    })
                        .then(() => {
                            const { uid, displayName, email, photoURL } = auth?.currentUser;

                            dispatch(addUser({
                                uid: uid,
                                email: email,
                                displayName: displayName,
                                photoURL: photoURL
                            }))
                        })
                        .catch((error) => {
                            setErrorMessage(error)
                        })
                    alert(`${user.displayName} Sign Up Successfull`);

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    alert(`${user.displayName} Login Successfull`);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }
    }

    return (
        <div className='relative'>
            <Header isSignInForm={isSignInForm} setIsSignInForm={setIsSignInForm} />
            <div className='absolute top-0 left-0 h-screen'>
                <img className='w-screen aspect-video object-cover' src={BG_IMG} alt="bg-img" />
            </div>
            <form className='relative top-28 w-4/12 mx-auto text-white bg-black py-15 p-10 rounded-lg bg-opacity-80'>
                <h1 className='py-8 text-3xl font-semibold'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {
                    errorMessage &&
                    <p className='mb-4 text-red-600 text-center'>{errorMessage}</p>
                }
                {!isSignInForm && <input ref={name} className='w-full p-4 mb-4 rounded-md bg-gray-800' type="text" placeholder='User Name' />}
                <input ref={email} className='w-full p-4 mb-4 rounded-md bg-gray-800' type="text" placeholder='Email or Phone number' />
                <input ref={password} className='w-full p-4 mb-4 rounded-md bg-gray-800' type="text" placeholder='Password' />
                <button onClick={handleBtnClick} className='bg-red-600 py-3 mb-10 rounded-md text-white font-bold w-full hover:opacity-60 '>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='cursor-pointer hover:underline' onClick={() => setIsSignInForm(!isSignInForm)}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now."}</p>
            </form>
        </div>
    )
}

export default Login