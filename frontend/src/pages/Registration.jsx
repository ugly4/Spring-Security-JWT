import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Registration.css"
import { useState } from "react";
import { Context } from "../service/AuthContext";
import { registration } from "../requests/authAPI";

const Registration = () =>{
    const navigate = useNavigate();

    const {setIsAuthenticated} = useContext(Context)
    // States for registration
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(false);

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
    };
 
    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
 
    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
 
    // Handling the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
            setError(true);
        } else {
            try {
                let data = await registration(name, email, password);
                setIsAuthenticated(true);
                console.log(data);
                navigate("/home");
              } catch (e) {
                alert(e.response.data.message);
              }
        }
    };
    
 
 
    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h3 style={{margin:"0"}}>Пожалуйста заполните все поля</h3>
            </div>
        );
    };

    return(
        <div className="form">
            <img 
                        style={{width:"15%", height:"15%"}}
                        id = "logo"
                        src="https://i.ibb.co/Fb1vSvv/methood-logo-png.png" 
                        alt="logo" />

            <div>
                <h1 style={{color:"rgb(233,30,35)"}}>Регистрация</h1>
            </div>
            <div className="messages">
                {errorMessage()}
            </div>
 
            <form style={{display:"flex", flexDirection:"column", width:"30vw", justifyContent:"center"}}>
                
                <label className="label">Никнейм</label>
                <input onChange={handleName} className="input"
                    value={name} type="text" />
 
                <label className="label">Email</label>
                <input onChange={handleEmail} className="input"
                    value={email} type="email" />
 
                <label className="label">Пароль</label>
                <input onChange={handlePassword} className="input"
                    value={password} type="password" />
 
                <button onClick={handleSubmit} className="btn"
                        type="submit">
                    Зарегистрироваться
                </button>
                <div style={{display: "flex", flexDirection:"row", justifyContent:"center"}}>
                    <label className="label">Уже есть аккаунт?</label>
                    <Link to={"/login"} className="label">Войти</Link>
                </div>
                
                
            </form>
            
        </div>
    )
}

export default Registration;