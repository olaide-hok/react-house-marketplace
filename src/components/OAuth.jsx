import React from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {doc, setDoc, getDoc, serverTimestamp} from 'firebase/firestore'
import {db} from '../firebase.config'
import {toast} from 'react-toastify'
import googleIcon from '../assets/svg/googleIcon.svg'


function OAuth() {
    const navigate = useNavigate()
    const location = useLocation()


    const onGoogleClick = async () => {
        try {
            const auth = getAuth()
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const user = result.user

            // Check for User in FireStore Database

            const docRef = doc(db, 'users', user.uid)
            const docSnap = await getDoc(docRef)

            // If user does not exist, create user in Firestore
            if(!docSnap.exists()) {
                await setDoc(doc(db, 'user', user.uid), {
                    name: user.displayName,
                    email: user.email,
                    timestamp: serverTimestamp()
                })
            }
            navigate('/')

            toast.success("Authorized with Google")
        } catch (error) {
            toast.error('Could not authorize with Google.')
        }
    }



  return (
    <div className="socailLogin">
        <p>Sign {location.pathname === './sign-up' ? 'up' : 'in'} with </p>
        <button
            onClick={onGoogleClick} 
            className="socialIconDiv">
            <img className='socialIconImg' src={googleIcon} alt="google" />
        </button>
    </div>
  )
}

export default OAuth