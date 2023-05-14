//Importing PAckages
import React, { useState } from "react";

//Importing Files
import LoginPage from "../pages/login";

const LoginComponent = () => {

    const [checked,setChecked] = useState(false);
    const [eye,setEye] = useState(false);

    const isChecked = (e) => {
        e.preventDefault();
        setChecked(!checked);
    }

    const closeEye = () => {
        setEye(!eye);
    }

    return(
        <LoginPage eye={eye} closeEye={closeEye} checked={checked} isChecked={isChecked} />
    )
}

export default LoginComponent;