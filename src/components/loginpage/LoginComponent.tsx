import React, { useState } from 'react'
import EmailInput from '../common/inputs/EmailInput';
import PasswordInput from '../common/inputs/PasswordInput';
import ButtonSubmit from '../common/buttons/ButtonSubmit';
import loginRequest from '../../types/request/loginRequest';

const LoginComponent = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(false);

    const loginUser = () =>{
        
    }
  return (
    <div className="loginContainer">
      <h3 className="">Войти</h3>
      <p className=""> Почта</p>
      <EmailInput
        setEmail={setEmail}
        email={email}
        setIsValid={setIsValid}
      />
      <p className="loginPassword">Пароль</p>
      <PasswordInput
        setPassword={setPassword}
        password={password}
        placeholder="Введите пароль"
      />
      <ButtonSubmit
        handleClick={loginUser}
        value={{ email, password } as loginRequest}
        name="Войти"
        isValid={isValid}
        link="/home"
      />
    </div>
  )
}

export default LoginComponent
