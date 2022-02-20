import {getAuth} from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {
  const auth = getAuth()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })

  const {name, email } = formData

  const onLogout = () => {
    auth.signOut()
    navigate('/')
  }

  


  return (
    <div className="profile">
      <header className="profileHeader">
        <p className="pageHeader">My Profile</p>
        <button
          onClick={onLogout}
          type='button'
          className="logOut">
          Logout
        </button>
      </header>
    </div>
  )
}

export default Profile