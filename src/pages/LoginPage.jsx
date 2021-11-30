import React, { Suspense, useState } from "react";

import LoginForm from '../components/LoginForm'
import Users from '../components/Users'


export const AllUsersContext = React.createContext()

function LoginPage() {

    const [allusers, setAllUsers] = useState([])

    return (
        <AllUsersContext.Provider value={[allusers, setAllUsers]}>
        <div>
            <LoginForm/>
            <Users/>
        </div>
        </AllUsersContext.Provider>
    )
}

export default LoginPage
