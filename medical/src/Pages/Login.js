import React, { useState } from 'react';
import { Box, TextField, Typography, Button, Input } from '@mui/material';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';

const Login = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [Inputs, setInputs] = useState({
        name: "",
        email: "",
        password: ""
    });
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Inputs);
    };
    const resetState = () => {
        setIsSignup (!isSignup);
        setInputs({name:"", email:"", password:""})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection={"column"}
                    width={350}
                    alignItems='center'
                    justifyContent={'center'}
                    margin='auto'
                    padding={5}
                    marginTop={2}
                    marginBottom={2}

                    sx={{
                        ":hover": {
                            boxShadow: '10px 10px 20px #ccc',
                            borderRadius: 5,
                        },
                    }}

                >
                    <Typography variant='h3' padding='3px' textAlign='center'>{isSignup ? "Signup" : "Login"}</Typography>

                    {isSignup && (<TextField
                        onChange={ handleChange }
                        name="name"
                        value={Input.name}
                        margin='normal'
                        type={'text'}
                        variant='outlined'
                        placeholder='Name' />)}

                    <TextField
                        onChange={ handleChange }
                        name="email"
                        value={Input.email}
                        margin='normal'
                        type={'email'}
                        variant='outlined'
                        placeholder='Email' />

                    <TextField
                        onChange={ handleChange }
                        name="password"
                        value={Input.password}
                        margin='normal'
                        type={'password'}
                        variant='outlined'
                        placeholder='Password' />

                    <Button 
                    endIcon={isSignup ? <HowToRegOutlinedIcon/> : <LogoutOutlinedIcon />}
                    type="submit"
                        sx={{ marginTop: 3, borderRadius: 3 }}
                        variant='contained'
                        color='warning'>{isSignup ? "Signup" : "Login"}</Button>

                    <Button 
                    endIcon={isSignup ? <LogoutOutlinedIcon /> : <HowToRegOutlinedIcon/>}
                    onClick={resetState} 
                    sx={{ marginTop: 3, borderRadius: 3 }}>
                        Change To  {isSignup ? "Login" : "Signup"}
                    </Button>
                </Box>
            </form>
        </div>
    )
}
export default Login;