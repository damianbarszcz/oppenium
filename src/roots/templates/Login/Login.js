import React, {useState}  from 'react';
import styled from "styled-components";
import axios from 'axios';

import { LoginPanel, LoginBanner } from "../../components";

const LoginWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
`

const Login = (props) => {
    const [email, get_email] = useState('');
    const [password, get_password] = useState('');
    const [errors, set_error ] = useState([]);

    const handleForm = (e) => {
        e.preventDefault();

        axios.post('/api/login',  {
            email: email,
            password: password
        })
        .then(response => {
            if (!response.error) {
                // If success
            }
        })

        .catch(error => { set_error(error.response.data.errors)  }  );
    }

    return (
        <LoginWrapper>
            <LoginBanner />
            <LoginPanel email = {email} password = {password} get_email={get_email} get_password={get_password}
             errors ={errors} set_error ={set_error} handleForm={handleForm} />
        </LoginWrapper>
    );
}

export default Login;