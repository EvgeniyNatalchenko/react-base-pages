import React, {useState, useEffect, useContext} from 'react'

import {AllUsersContext} from '../../pages/LoginPage'


function User({
    id = '',
    name = '',
    password = ''
}) {

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{password}</td>
        </tr>
    )
}


function Users() {
   
    const [users, setUsers] = useState([]);

    const [allusers, setAllUsers] = useContext(AllUsersContext);

    useEffect(() => {
        fetch('https://fakestoreapi.com/users')
            .then(res=>res.json())
            .then(json=>{ setUsers(json);  setAllUsers(json); } )
            .catch(e => { console.error(e) } )
    }, [])


    return (
<>
       <table>
            <th>ID</th>
            <th>User Name</th>
            <th>Password</th>
       { users.map(u => <User id={u.id} name={u.username} password={u.password} />) }
       </table>
</>


//    users.map((u) => (
//            <div>
//             <h2>{u.id}</h2>
 //           <h2>{u.username}</h2>
 //           <p>{u.password}</p>
 //        </div>
 //   ))
    )
}

export default Users