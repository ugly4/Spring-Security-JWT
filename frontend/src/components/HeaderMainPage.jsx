import React, { useContext, useRef} from "react";
// import { useEffect, useState } from "react";
import "./HeaderMainPage.css"
//import Content from "./Content";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../service/AuthContext";

const HeaderMainPage = () =>{

    // const [sticky, setSticky] = useState("console");
    // const [stickyLogo, setStickyLogo] = useState("logo");
    const navigate = useNavigate();
    const {setIsAuthenticated} = useContext(Context)
    const posTop = useRef();

    // useEffect(() => {
    //     localStorage.setItem("logoTop", document.getElementById('logo').offsetTop);
    //     window.addEventListener("scroll", isSticky);
    //     return () => {
    //     window.removeEventListener("scroll", isSticky);
    //     };
    // }, []);
   
    // const isSticky = () => {
    //     const scrollTop = window.scrollY;
    //     if(scrollTop > posTop.current.offsetTop){
    //         setSticky("fixconsole");
    //         setStickyLogo("fixlogo");
    //     }
    //     else{
    //         setSticky("console");
    //         setStickyLogo("logo");
            
    //     }
        
    // };

    const logout = () => {
        navigate("/login");
        setIsAuthenticated(false);
        localStorage.clear();
        
    };

    return(
        <div>
            <div className="fixconsole" id="mainHeader" >
                        <img 
                            className="logo"
                            ref={posTop}
                            id = "logo"
                            src="https://i.ibb.co/Fb1vSvv/methood-logo-png.png" 
                            alt="logo" />
                        <Link to={"/login"} style={{bottom:"0", right:"0", position:"absolute" }} 
                            className="label" 
                            onClick={() =>logout()}>
                            Выйти
                        </Link>
            
            </div>
            
        </div>
    )
}
export default HeaderMainPage;