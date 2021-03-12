import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
    const [username, setUsername] = useState("");
    let history = useHistory();

    const handleChange = (event) => {
        setUsername(event.target.value);
    };

    const handleClick = () => {
        localStorage.setItem('currentUser', username);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/movielist');
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <div className="card rounded d-inline-block">
                    <div className="card-header">
                        <h3 className="user-select-none">Login</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><FontAwesomeIcon icon={faUser}/></span>
                                </div>
                                <input type="email" onChange={handleChange} className="form-control" placeholder="Enter Email" required/>
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><FontAwesomeIcon icon={faKey}/></span>
                                </div>
                                <input type="password" className="form-control" placeholder="Enter Password" required/>
                            </div>
                            <div class="form-group">
						        <input type="checkbox" /><span className="user-select-none">Remember Me</span>
					        </div>
                            <div className="form-group d-flex justify-content-center">
                                <input type="submit" value="Login" className="btn" style={{backgroundColor:"#eccc68"}} onClick={handleClick}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;