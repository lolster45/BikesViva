//React...
import React from 'react';
import {useNavigate} from 'react-router-dom'


//Firebase...
import { signInWithPopup } from "firebase/auth"
import { auth, provider, database} from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

//React icons...
import { FcGoogle } from "react-icons/fc";

//Styles...
import '../styles/LoginPage.scss'


const LoginPage = () => {

    const navigate = useNavigate();


    const checkIfAdmin = async (userId) => {
        const adminDoc = doc(database, "admins", userId);
        const docSnapshot = await getDoc(adminDoc);
    
        if (docSnapshot.exists()) {
            return true; // The user is an admin
        } else {
            return false; // The user is not an admin
        }
    };

     //Functiont to sign in with google...
     const signUpWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const isAdmin = await checkIfAdmin(result.user.uid);

            if(isAdmin) {
                //navigate to dashboard
                navigate('/admin')
                return;
            }
            else {
                //navigate to homescreen as normal user...
                navigate("/")
                return;
            }
        } 
        catch (error) {
            console.log("failed to login", error)
        }
    }


    return (
        <div className='login-page'>
            <div className="login-wrap">
                <div onClick={signUpWithGoogle}>
                    <FcGoogle/>
                    Sign In With Google
                </div>
            </div>
        </div>
    );
};

export default LoginPage;