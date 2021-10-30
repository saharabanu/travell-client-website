import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";



initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    
    const [isLoading,setIsLoading] = useState(true)

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    

    const signInUsingGoogle = () => {
        setIsLoading(true);
       return signInWithPopup(auth, googleProvider)
            
            .finally(()=> setIsLoading(false));
    }

   

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(()=> setIsLoading(false));
    }

    useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unSubscribed;
    }, []);

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logout
    }
}

export default useFirebase;