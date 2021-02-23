import React, { useState } from 'react';
import Link from 'next/link';

import {
  Container,
  LoginContainer,
  ImageContainer,
  Title,
  SubTitle,
  LoginForm,
  Input,
  Label,
  Button,
  Text,
  LinkText,
} from '../styles/home';

const Home: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container>
      <ImageContainer />
      <LoginContainer>
        <Title>Olá, seja</Title>
        <Title margin>bem-vindo!</Title>
        <SubTitle>Para acessar a plataforma,</SubTitle>
        <SubTitle margin>faça seu login.</SubTitle>
        <LoginForm onSubmit={handleSubmit}>
          <Label>E-MAIL</Label>
          <Input
            type="email"
            placeholder="user.name@mail.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Label>SENHA</Label>
          <Input
            type="password"
            placeholder="******"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">ENTRAR</Button>
        </LoginForm>
        <Text>Esqueceu seu login ou senha?</Text>
        <Text>
          Clique
          {' '}
          <Link href="/password-reset" passHref>
            <LinkText>aqui</LinkText>
          </Link>
        </Text>
      </LoginContainer>
    </Container>
  );
};

export default Home;
