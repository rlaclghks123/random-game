import {
  StyleContainer,
  ModalBox,
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
    <>
      <StyleContainer onClick={offModal}>
        <ModalBox>
          <StyleCloseBtn onClick={offModal}>❌</StyleCloseBtn>
          <StyleHeader>{title}</StyleHeader>
          <StyleMain>
            <StyleUl>
              {data.map((item, i) => (
                <StyleLi key={i}>{`- ${item.content}`}</StyleLi>
              ))}
            </StyleUl>
          </StyleMain>
        </ModalBox>
      </StyleContainer>
    </>
  );
};

export default Modal;
