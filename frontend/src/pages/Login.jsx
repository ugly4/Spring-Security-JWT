import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../requests/authAPI";
import { Context } from "../service/AuthContext";
const Login = () =>{

    const navigate = useNavigate();
    const {setIsAuthenticated} = useContext(Context);
    // States for registration
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(false);

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
    };
 
 
    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
 
    // Handling the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name === '' || password === '') {
            setError(true);
        } else {
            try {
                let data;
                data = await login(name, password);
                setIsAuthenticated(true);
                navigate("/home");
                console.log(localStorage);
                console.log(data);
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
                <h1 style={{margin:"0"}}>Пожалуйста заполните все поля</h1>
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
                <h1 style={{color:"rgb(233,30,35)"}}>Авторизация</h1>
            </div>
            <div className="messages">
                {errorMessage()}
                
            </div>
 
            <form style={{display:"flex", flexDirection:"column", width:"30vw", justifyContent:"center"}}>
                
                <label className="label">Никнейм</label>
                <input onChange={handleName} className="input"
                    value={name} type="text" />
 
                <label className="label">Пароль</label>
                <input onChange={handlePassword} className="input"
                    value={password} type="password" />
 
                <button onClick={handleSubmit} className="btn"
                        type="submit">
                    Войти
                </button>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <label className="label">Еще нет аккаунта?</label>
                    <Link to={"/registration"} className="label">Зарегистрироваться</Link>
                </div>
                
                
            </form>
            
        </div>
    )

}

export default Login;