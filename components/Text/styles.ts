import styled from 'styled-components';

interface Props {
  margin?: boolean;
}

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

export const Normal = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #989FDB;
`;

export const Link = styled.a`
  color: #972ea8;

  :active {
    opacity: 0.5;
  }
`;
