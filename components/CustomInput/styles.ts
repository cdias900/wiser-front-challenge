import styled from 'styled-components';

interface Props {
  error?: boolean;
}

export const Label = styled.label`
  padding: 0 10px;
  margin: 24px 0 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
`;

export const Input = styled.input`
  border: 1px solid ${(props: Props) => (props.error ? '#FF377F' : '#989FDB')};
  background: ${(props: Props) => (props.error ? 'url(\'/x.png\') no-repeat 8px 8px' : 'transparent')};
  background-position: right;
  background-origin: content-box;
  border-radius: 8px;
  padding: 16px;
  position: relative;

  ::placeholder {
    color: #989FDB;
  }
`;

export const ErrorMsg = styled.span`
  margin-left: 20px;
  color: #FF377F;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 32px;
`;
