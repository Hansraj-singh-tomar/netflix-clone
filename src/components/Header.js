import React, { useEffect } from 'react'

// Constant 
import { NETFLIX_LOGO } from '../utils/constants';

// Firebase
import { auth } from '../utils/firebase'
import { onAuthStateChanged, signOut } from "firebase/auth";

// react-router-dom
import { useNavigate } from 'react-router-dom';

// Redux-Toolkit
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Redux/userSlice';


const Header = ({ isSignInForm, setIsSignInForm }) => {
    const user = useSelector((store) => store.user);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        // Set an authentication state observer and get user data
        //! onAuthStateChange() is kind of event listener for us for that we have to remove this event listeners 
        //! onAuthStateChange() returns us unsubscribe function
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;

                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL
                    })
                )
                navigate("/browse")
            } else {
                dispatch(removeUser());
                navigate("/")
            }
        });

        // when my header component unload it will unsubscribe to the event
        return () => unSubscribe();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleSignOut() {
        signOut(auth).then(() => {
            alert("User Logout Successfully");
        }).catch((error) => {
            navigate("/error")
        });
    }

    return (
        <div className="absolute z-50 w-full px-8 py-4 bg-gradient-to-b from-black flex justify-between items-center">
            <img className='w-40 h-16 object-cover' src={NETFLIX_LOGO} alt="logo" />
            {
                user ?
                    <div className='flex items-center'>
                        <img className='w-9 h-9 rounded-sm object-contain' src={user.photoURL} alt="img" />
                        <button onClick={handleSignOut} className='text-white bg-blue-600 font-bold px-3 h-9 rounded-[5px] ml-2'>Sign Out</button>
                    </div>
                    :
                    !isSignInForm && <button onClick={() => setIsSignInForm(true)} className='text-white bg-red-600 font-bold px-3 h-9 rounded-[5px]'>Sign In</button>
            }
        </div>
    )
}

export default Header