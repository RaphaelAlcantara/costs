import {useEffect, useState} from "react";
import Input from "../form/Input";
import styles from './Login.module.css'
import SubmitButton from "../form/SubmitButton";
function Login ({handleSubmit,users}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


    //verificar login no db.json

    useEffect( () => {
        fetch('http://localhost:5000/users',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resp => resp.json())
            .then((data) => {setEmail(data)}).then((data) => {setPassword(data)})
            .catch((err) => console.log(err));
    },[]);

    function handleChange(e){
        setEmail({...users, [e.target.name]: e.target.value});
    }


    //verificar se o email e a senha estão corretos
    function verifyLogin(e){
        e.preventDefault();
        if(email === users.email && password === users.password){
            handleSubmit();
        }else{
            alert('Email ou senha incorretos');
        }
    }





    return (
        <div onSubmit={verifyLogin} className={styles.form_container}>
            <h1>Login</h1>
            <form  className={styles.form}>
                <Input type="email"
                       text="Email"
                       name="email"
                       placeholder="Insira o email cadastrado"
                       handleOnChange={handleChange}/>

                <Input type="password"
                       text="Password"
                       name="password"
                       placeholder="Insira sua senha"

                />
                <SubmitButton text="Entrar"/>
            </form>
        </div>

    )

}

export default Login