import React, {useState} from 'react';
import './Entry.style.css';
import {Jumbotron} from 'react-bootstrap';
import LoginForm from '../../components/login/Login.comp'
import ResetPasswordForm from '../../components/password-reset/PasswordResetcomp'


export const Entry = () =>  { 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [formLoad, setFormLoad] = useState('login')

    const handleonChange = (e) => {
        const {name, value} = e.target

        switch(name){
            case "email":
                setEmail(value)
                break
            case "password":
                setPassword(value)
                break
             default:
                 break       

        }
    }

    const handleonSubmit = (e) => {
        e.preventDefault();

        if(!email | !password){
            return alert("Fill up the form")
        }
        //TODO call api to submit the form
        console.log(email, password)
    }

    const handleonResetSubmit =(e) => {
        e.preventDefault();

        if(!email){
            return alert ("please fill the email")
        }
        //TODO call api to submit the form
        console.log(email)
    }

    const formSwitcher = (formType) => {
        setFormLoad(formType)
    }

    return(
        <div className="entry-page bg-info">
           <Jumbotron className="form-box">

            {formLoad==='login'&& <LoginForm 
               handleonChange={handleonChange}
               handleonSubmit={handleonSubmit}
               formSwitcher={formSwitcher}
               email={email}
               password={password}         
               />}
             {formLoad==='reset'&& <ResetPasswordForm 
               handleonChange={handleonChange}
               handleonResetSubmit={handleonResetSubmit}
               formSwitcher={formSwitcher}
               email={email}
               />}
           </Jumbotron>
        </div>
    )
}

