import styled from 'styled-components';

export const Container = styled.div`
  background: #FAF5FF;
  height: 100vh;
  width: 100vw;
  display: flex;
`;

export const ImageContainer = styled.div`
  width: 60%;
  overflow: hidden;
  position: relative;
  background: url('/side_image.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(180deg, #130525 0%, rgba(105, 57, 153, 0) 100%);
    transform: rotate(-180deg);
  }

  @media (max-width: 1220px) {
    width: 55%;
  }

  @media (max-width: 1050px) {
    width: 50%;
  }

  @media (max-width: 700px) {
    width: 45%;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 120px;
  width: 18%;

  @media (max-width: 1220px) {
    width: 22%;
    margin-left: 100px;
  }

  @media (max-width: 1050px) {
    width: 35%;
    margin-left: 50px;
  }

  @media (max-width: 700px) {
    width: 50%;
    margin-left: 15px;
  }

`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
  box-shadow: 0px 10px 25px #CF99DB;
  border-radius: 8px;
  color: #FFFFFF;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  padding: 16px;
  outline: none;
  width: 100%;
  border: none;
  margin: 32px 0;
  cursor: pointer;
  transition: all .2s;

  :active {
    opacity: 0.7;
  }

  :hover {
    filter: brightness(.85);
  }
`;
