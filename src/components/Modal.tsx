import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: #000000a1;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  position: relative;
  height: 400px;
  width: 500px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const StyleCloseBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;

  border: none;
  border-radius: 50%;
  padding: 10px;

  background-color: inherit;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

const StyleHeader = styled.div`
  padding: 20px 0px;
  font-weight: 700;
  text-align: center;
`;

const StyleMain = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  height: inherit;
  padding: 10px;
  overflow: auto;
`;

const StyleUl = styled.ul`
  width: 100%;
  height: 100%;
  line-height: 20px;
`;

const StyleLi = styled.ul`
  margin: 40px 0px;
  font-family: Arial, Helvetica, sans-serif;
  opacity: 0.7;
`;

interface IModal {
  offModal: (e: React.MouseEvent<HTMLElement>) => void;
  isModalOpened: boolean;
  title: string;
  data: { content: string }[];
}

const Modal = ({ offModal, isModalOpened, title, data }: IModal) => {
  return (
    <>
      {isModalOpened && (
        <Container onClick={offModal}>
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
        </Container>
      )}
    </>
  );
};

export default Modal;
