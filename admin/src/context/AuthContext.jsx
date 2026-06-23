import React, { createContext } from 'react'

export const authDataContext = createContext()
function AuthContext({children}) {
<<<<<<< HEAD
    let serverUrl = import.meta.env.VITE_BACKEND_URL 
=======
    let serverUrl = "https://lotuscart-ecommerce-platform-backend-us5d.onrender.com"
>>>>>>> 80cc84f0b3fb8f3e0776ba852b3ce3197445dfa0

    let value = {
      serverUrl
    }
  return (
    <div>
        <authDataContext.Provider value={value}>
            {children}
        </authDataContext.Provider>
      
    </div>
  )
}

export default AuthContext
