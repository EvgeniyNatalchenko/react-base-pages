import React, { useContext } from "react";
import styles from "./login.module.scss";

import useForm from '../../hooks/useForm'
import {UserContext} from '../../App'
import {AllUsersContext} from '../../pages/LoginPage'

function validator(values, allusers) {
    let errors = {};

    if (!values.username) {
      errors.username =  "Username is required"
    }

    if (!values.password) {
       errors.password =  "Password is required"
    } else if(values.password.length < 2) {
       errors.password =  "Password is too short"
    }

    if(allusers != undefined && allusers != null)
    {
      let validuser = allusers.filter(function(u) {
        return u.username === values.username;
      });
      if(validuser.length != 1) errors.username =  "Username is not valid"
      else if(validuser[0].password != values.password)   errors.password =  "Password is not valid"
    }


    return errors
}



function LoginForm() {
    const [user, setUser] = useContext(UserContext)
    const [allusers, setAllUsers] = useContext(AllUsersContext);


    const {
        handleChange,
        handleSubmit,
        values,
        errors
      } = useForm(submitForm, validator, allusers)
  
      async function autorize(username, password) {
        let param={};  param.username=username;  param.password=password;
        console.log("=================0 "+param.username+" "+param.password)
        let response = await fetch('https://fakestoreapi.com/auth/login',{
          method:'POST',
          body:JSON.stringify( { "username": "mor_2314", "password": "83r5^_" }  )
      });
   //   if (response.status == 200) console.log("================= good")
      console.log("=================1"+response)
        let data = await response.json();
        console.log("=================2 ")
        return data;
      }

      function submitForm () {
        let userid=-1;
        let validuser = allusers.filter(function(u) {
          return u.username === values.username;
        });
        if(validuser.length === 1)  userid=validuser[0].id;
        values.id=userid;
        setUser(values);


        if(userid !== -1)
        {
        console.log("================="+values.username+" p "+values.password);
        autorize(values.username, values.password)
          .finally(() => console.log("finish fetch autorize"))
          .then(ud => console.log(ud), error => console.log(error))
          .catch(e => console.error(e));
        }
      }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Авторизация {user.username} [{user.password}] userid={user.id}</legend>
            <label className={styles.label}>
              <input
                className={styles.label.input}
                onChange={handleChange}
                value={values.username}
                type="text"
                name="username"
                placeholder="UserName"
              />
              {errors.username && <p style={{color:'red'}}>{errors.username}</p>}
            </label>
            <label className={styles.label}>
              <input
                className={styles.input}
                onChange={handleChange}
                value={values.password}
                type="password"
                name="password"
                placeholder="Password"
              />
              {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
            </label>
            <button type="submit">Войти</button>
          </fieldset>
        </form>
      </div>
    );
  }
  
  export default LoginForm;
  