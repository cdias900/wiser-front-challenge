import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import { validateEmail } from '../utils';
import {
  setEmail, setPassword, setError, login,
} from '../redux/actions';

import CustomInput from '../components/CustomInput';
import Text, { textTypes } from '../components/Text';

import {
  Container,
  LoginContainer,
  ImageContainer,
  LoginForm,
  Button,
} from '../styles/home';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.email);
  const password = useSelector((state) => state.password);
  const error = useSelector((state) => state.error);
  const isAuth = useSelector((state) => state.isAuth);
  const authComplete = useSelector((state) => state.authComplete);

  useEffect(() => {
    if (authComplete) {
      if (isAuth) alert('Login efetuado com sucesso!');
      else alert('Falha no login!');
    }
  }, [authComplete]);

  const handlePasswordChange = (value: string) => {
    dispatch(setPassword(value));
  };

  const handleEmailChange = (value: string) => {
    if (error) dispatch(setError(false));
    dispatch(setEmail(value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      dispatch(setError(true));
      return;
    }
    dispatch(login(email, password));
  };

  return (
    <Container>
      <ImageContainer />
      <LoginContainer>
        <Text type={textTypes.TITLE} text={'Olá, seja\nbem-vindo!'} />
        <Text type={textTypes.SUBTITLE} text={'Para acessar a plataforma,\nfaça seu login.'} />
        <LoginForm onSubmit={handleSubmit}>
          <CustomInput
            label="E-MAIL"
            type="text"
            placeholder="user.name@mail.com"
            onChange={handleEmailChange}
            required
            error={error}
            errorMsg="Digite um e-mail válido;"
          />
          <CustomInput
            label="SENHA"
            type="password"
            placeholder="******"
            onChange={handlePasswordChange}
            required
          />
          <Button type="submit">ENTRAR</Button>
        </LoginForm>
        <Text type={textTypes.NORMAL} text={'Esqueceu seu login ou senha?\nClique'}>
          <Link href="/password-reset" passHref>
            <Text type={textTypes.LINK} text="aqui" />
          </Link>
        </Text>

      </LoginContainer>
    </Container>
  );
};

export default Home;
