import { styled } from 'styled-components';

interface Props {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  title: string;
}

const StyleModalBox = styled.li`
  width: 100%;
  height: 50px;

  color: white;
  background-color: #a7642a;
  border-radius: 10px;
  cursor: pointer;

  margin: 10px 0px;

  &:hover {
    background-color: white;
    color: #a7642a;
  }
`;

const StyleButton = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: inherit;
  background-color: inherit;
  color: inherit;
  font-size: inherit;
  cursor: pointer;
`;

const ModalBtn = ({ onClick, title }: Props) => (
  <StyleModalBox>
    <StyleButton onClick={onClick}>{title}</StyleButton>
  </StyleModalBox>
);

export default ModalBtn;
