import React, { useState } from 'react'
import EmailInput from '../common/inputs/EmailInput'
import PasswordInput from '../common/inputs/PasswordInput'
import ButtonSubmit from '../common/buttons/ButtonSubmit';
import loginRequest from '../../types/request/loginRequest';

const RegistrationComponent = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(false);
    const [confirmPass, setConfirmPass] = useState<string>('')

    const register = () =>{

    }
  return (
    <div className="loginContainer">
      <h3 className="">Регистрация</h3>
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
      <PasswordInput
        setPassword={setConfirmPass}
        password={confirmPass}
        placeholder="Повторите пароль"
      />
      <ButtonSubmit
        handleClick={register}
        value={{ email, password } as loginRequest}
        name="Войти"
        isValid={isValid}
        link="/home"
      />
    </div>
  )
}

export default RegistrationComponent
