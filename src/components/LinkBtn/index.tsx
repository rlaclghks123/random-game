import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  link: string;
  title: string;
}

export const StyleModalBox = styled.li`
  width: 100%;
  border-radius: 10px;
  cursor: pointer;

  margin: 10px 0px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 50px;

    color: white;
    background-color: #a7642a;
    border-radius: 10px;

    &:hover {
      background-color: white;
      color: #a7642a;
    }
  }
`;

const LinkBtn = ({ link, title }: Props) => (
  <StyleModalBox>
    <Link to={link}>{title}</Link>
  </StyleModalBox>
);

export default LinkBtn;
