import '../Styles/Login.css';
import { ImGoogle2 } from 'react-icons/im'
import { AiOutlineGithub } from 'react-icons/ai'
import { GrTwitter } from 'react-icons/gr'
import { useState } from "react";
import axios from "axios";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../Redux/action";
import { Navigate } from "react-router-dom";
import { Navbar } from './Navbar';

export const Login = () => {

    const dispatch = useDispatch();

    const { token } = useSelector(
        (state) => state,
        shallowEqual
    );    
    //console.log(token);

    const [ldetails, setLdetails] = useState({ email: "", password: "" });
    const [lswtch, setLswtch] = useState(false);
    //console.log('details:', ldetails);

    const handleChange = (e) => {
        //console.log(e.name);
        setLdetails({...ldetails, [e.target.name]: e.target.value});
    }


    const onSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/login", ldetails)
        .then((res) => {
            console.log(res.data);
            if(res.data.message)
            {
                alert(res.data.message);
            }
            else
            {
                alert("Logged in successfully");
                const action = loginSuccess(res.data.token); // logoutsuccess("token")
                // // console.log("action:", action);
                dispatch(action);
                setLswtch(true);
            }
        });
    }

    if(lswtch)
    {
        return <Navigate to={'/'} />   
    }

    return (
        <div>
            <Navbar />
            <div className="l-container">
                <div className="l-welcome">
                    <h2>Login</h2>
                    <div className="btns">
                        <button className="git"><ImGoogle2 /> &nbsp; Continue with Google</button>
                        <button className="git"><AiOutlineGithub /> &nbsp; Continue with Github</button>
                        <button className="git"><GrTwitter /> &nbsp; Continue with Twitter</button>
                    </div>
                    <p className="txt"><span>--------------</span> Have a password? Continue with your email address <span>--------------</span></p>
                    <section className="credentials">
                        <form onSubmit={ onSubmit }>
                            <p>Email</p>
                            <input className="inp" type="email" required onChange={ (e) => handleChange(e) } name="email" value={ldetails.email} />
                            <p>Password</p>
                            <input className="inp" type="password" required onChange={ (e) => handleChange(e) } name="password" value={ldetails.password} />
                            <button className="cont-btn">Continue</button>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    )
}
