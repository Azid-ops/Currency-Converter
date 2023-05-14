//Importing PAckages
import React from "react";
import Aux from "../../../../Auxiliary/auxiliary";

import Profile from '../../../../assets/Institute/profile.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { 
    faCheckSquare,
    faE,
    faEye,
    faEyeSlash,
    faSquare
} from '@fortawesome/free-solid-svg-icons';

import './login.css';

const LoginPage = (props) => {
    return(
        <Aux>
            <section className="outer__login__section">
                <section className="login__left__section">
                    <div className="login__left__div">
                        <h1 className="loginToColorlib">Login to ICCA Portal</h1>
                        <p className="description">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing</p>
                        <label>Roll No:</label>
                        <br />
                        <input className="input__field" placeholder="Your Registration Number" />
                        <br />

                        <label>Password:</label>
                        <br />
                        <div className="pwd">
                            <input 
                                className="input__field"
                                type={props.eye === false ? "password" : "text"}
                                placeholder="Your Password" 
                            />
                            <span class="p-viewer">
                                {
                                    props.eye === true ? <FontAwesomeIcon 
                                        onClick={props.closeEye} 
                                        size='1x' 
                                        className="eye__logo" 
                                        icon={faEye} 
                                    /> : <FontAwesomeIcon 
                                            onClick={props.closeEye} 
                                            size='1x' 
                                            className="eye__logo" 
                                            icon={faEyeSlash} 
                                        />
                                }
                            </span>
                        </div>
                        <br />

                        <select  className="input__field" >
                            <option value="">Choose Your Department</option>
                            <option >DBA</option>
                            <option >DIT</option>
                            <option >BBA</option>
                            <option >BCOM</option>
                            <option >KG</option>
                            <option >NURSREY</option>
                            <option >1st Class</option>
                            <option >2nd Class</option>
                            <option >3rd Class</option>
                            <option >4th Class</option>
                            <option >5th Class</option>
                        </select>

                        <div className="confirmation__div">  
                            {
                                props.checked === false ? <FontAwesomeIcon 
                                    onClick={props.isChecked} 
                                    size='3x' 
                                    className="checkbox__icon" 
                                    icon={faSquare} 
                                />:<FontAwesomeIcon 
                                    onClick={props.isChecked} 
                                    size='3x' 
                                    className="checkbox__icon" 
                                    icon={faCheckSquare} 
                                />
                            }

                            <p className="remember__me" >Remember Me</p>
                            <p className="forgot__password">Forgot Password</p>
                        </div>
                        <div className="login__button">
                            <p>Log In</p>
                        </div>
                    </div>
                </section>
                <section className="login__right__section">
                    <div>
                        <img className="profileImage" src={Profile} />
                    </div>
                </section>
            </section>
        </Aux>
    )
}

export default LoginPage;