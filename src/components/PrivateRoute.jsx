//React...
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

//Firebase...
import { doc, getDoc } from "firebase/firestore";
import { database, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

//Styles...
import '../styles/PrivateRoute.scss'

export default function PrivateRoute({ children }) {

    const [user, loading, error] = useAuthState(auth);
    const [isAdmin, setIsAdmin] = useState(null); // Initially set to null to indicate loading

    useEffect(() => {
        const checkAdmin = async () => {
            if (user) {
                const adminDoc = doc(database, "admins", user.uid);
                const docSnapshot = await getDoc(adminDoc);
                setIsAdmin(docSnapshot.exists());
            } else {
                setIsAdmin(false);
            }
        };

        if (user) {
            checkAdmin();
        }
    }, [user]);

    // Handle Firebase auth loading state
    if (loading || isAdmin === null) {
        return <div className="loading-page">Loading...</div>; // Show loading while checking
    }

    if (error) {
        return <div>Error: {error.message}</div>; // Handle any errors during authentication
    }

    // If the user is authenticated and an admin, allow access, otherwise redirect
    return isAdmin ? children : <Navigate to="/" />;
}
