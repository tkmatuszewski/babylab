import React, {useState, createContext, useContext, useEffect} from "react";
import { auth } from "../components/Firebase/Firebase";
import {onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "@firebase/auth";

const AuthContext = createContext();

export const useAuth =()=>{
    return useContext(AuthContext);
}

export const AuthProvider =({children})=>{

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(false);

    const signup = (auth, email, password)=> {
     return createUserWithEmailAndPassword(auth, email, password)
    }

//     const login = (auth, email, password) => { return signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // const history= useHistory()
//     // Signed in 
//     setCurrentUser(userCredential.user);
//     const user = userCredential.user;
//     history.push(home)
//     // ...
//     console.log(user)
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(error.message)
//   });


    const login = (auth, email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return auth.signOut()
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
            setLoading(false)
        })
    
        return unsubscribe
      }, [currentUser])
    
    const value = {
        currentUser,
        signup,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
};

