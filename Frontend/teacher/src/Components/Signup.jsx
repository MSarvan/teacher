import { RiAppleFill } from 'react-icons/ri'
import { ImGoogle2 } from 'react-icons/im'
import { AiOutlineGithub } from 'react-icons/ai'
import { GrTwitter } from 'react-icons/gr'
import { useState } from 'react'

export const Signup = () => {

    const [details, setDetails] = useState({ email: "", password: "" });
    const [swtch, setSwtch] = useState(false);
    //console.log('details:', details);

    const handleChange = (e) => {
        //console.log(e.name);
        setDetails({...details, [e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        
        e.preventDefault();

        axios.post("http://localhost:2345/register", details)
        .then((res) => {
            console.log(res.data);
            if(res.data.message)
            {
                alert(res.data.message)
            }
            else
            {
                alert("Signed up successfully");
                setSwtch(true);
            }
        });
        
    }

    if(swtch)
    {
        return <Navigate to={'/Login'} />   
    }

    return (
        <div className="s-container">
                <div className="welcome">
                    <p className="comm"> Signup </p>
                    <div className="btns">
                        <button className="apple"><RiAppleFill /> &nbsp; Sign up with Apple</button>
                        <button className="google"><ImGoogle2 /> &nbsp; Sign up with Google</button>
                        <button className="git"><AiOutlineGithub /> &nbsp; Sign up with Github</button>
                        <button className="twit"><GrTwitter /> &nbsp; Sign up with Twitter</button>
                    </div>
                    <p className="txt"><span>--------------</span> Sign up using Mail Id <span>--------------</span></p>
                    <section className="credentials">
                        <form onSubmit={ onSubmit }>
                            <p>Email</p>
                            <input className="inp" type="email" required onChange={ (e) => handleChange(e) } name="email" value={details.email} />
                            <p>Password</p>
                            <input className="inp" type="password" required onChange={ (e) => handleChange(e) } name="password" value={details.password} />
                            <p className="rem"><span><input type="checkbox" /></span> Remember me</p>
                            <button className="cont-btn">Continue</button>
                        </form>
                    </section>
                </div>
        </div>
    )
}