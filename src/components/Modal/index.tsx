import {
  StyleContainer,
  StyleModalContainer,
  StyleCloseBtn,
  StyleHeader,
  StyleMain,
  StyleUl,
  StyleLi,
} from './index.style';

interface IModal {
  offModal: (e: React.MouseEvent<HTMLElement>) => void;
  title: string;
  data: { content: string }[];
}

const Modal = ({ offModal, title, data }: IModal) => {
  return (
    <StyleContainer onClick={offModal}>
      <StyleModalContainer>
        <StyleCloseBtn onClick={offModal}>❌</StyleCloseBtn>
        <StyleHeader>{title}</StyleHeader>
        <StyleMain>
          <StyleUl>
            {data.map((item, i) => (
              <StyleLi key={i}>{`- ${item.content}`}</StyleLi>
            ))}
          </StyleUl>
        </StyleMain>
      </StyleModalContainer>
    </StyleContainer>
  );
};

export default Modal;
