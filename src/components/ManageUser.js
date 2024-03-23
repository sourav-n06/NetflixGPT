
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ManageUser = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => { 
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName } = user;
                dispatch(addUser({uid: uid,email: email, displayName: displayName}));
                navigate('/browse')

            } 
            else {
                // User is signed out
                dispatch(removeUser());
                navigate('/');
            }
        });
    },[]);
    
}

export default ManageUser
