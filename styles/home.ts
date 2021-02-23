import styled from 'styled-components';

interface Props {
  margin?: boolean;
}

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

export const Title = styled.p`
  font-style: normal;
  line-height: 48px;
  font-weight: 400;
  color: #383E71;
  font-size: 40px;
  margin-bottom: ${(props: Props) => (props.margin ? '16px' : 'unset')};
`;

export const SubTitle = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #989FDB;
  margin-bottom: ${(props: Props) => (props.margin ? '24px' : 'unset')};
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  padding: 0 10px;
  margin: 24px 0 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
`;

export const Input = styled.input`
  border: 1px solid #989FDB;
  border-radius: 8px;
  padding: 16px;
  background: transparent;

  ::placeholder {
    color: #989FDB;
  }
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

  :active {
    opacity: 0.5;
  }
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #989FDB;
`;

export const LinkText = styled.a`
  color: #972ea8;

  :active {
    opacity: 0.5;
  }
`;
