import React, { useContext } from 'react'
import { Authcontext } from './Context'
import { useNavigate } from 'react-router-dom';

const Private = ({children}) => {
    const {isauth} = useContext(Authcontext);
    const navigate = useNavigate();

    if(isauth){
        return children;
    }else{
        alert("no permisson")
        navigate("/");
    }
}

export default Private
