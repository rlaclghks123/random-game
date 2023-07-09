import { styled } from 'styled-components';
import Modal from '../components/Modal';
import MainPage from './MainPage';
import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

const StyleHeader = styled.div`
  padding: 15px;
`;

const StyleTitle = styled.div`
  @media screen and (max-width: 320px) {
    span {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  font-size: 30px;
  font-weight: 900;
  font-family: Georgia, 'Times New Roman', serif;
  color: red;
`;

const StyleMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  height: 100%;
`;

const MoveBox = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 100%;

  font-size: 20px;
  font-weight: 900;
  font-family: Georgia, 'Times New Roman', serif;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 50px;

    color: white;
    background-color: #cd8542;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      background-color: white;
      color: #cd8542;
    }
  }
`;

const ModalBox = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 50px;

  color: white;
  background-color: #cd8542;
  border-radius: 10px;
  cursor: pointer;

  margin: 10px 0px;

  &:hover {
    background-color: white;
    color: #cd8542;
  }
`;

const App = () => {
  const [isInstructionModal, setIsInstructionModal] = useState(false);
  const [isFaqModal, setIsFaqModal] = useState(false);

  const handleInstruction = () => {
    setIsInstructionModal(true);
  };

  const handleFaq = () => {
    setIsFaqModal(true);
  };

  const offInstructionModal = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget === e.target) setIsInstructionModal(false);
  }, []);

  const offFaqModal = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget === e.target) setIsFaqModal(false);
  }, []);

  const instructionData = [
    { content: '복불복 게임의 진행을 위해 1~50까지의 숫자를 입력합니다.' },
    { content: '마음의 준비를 합니다' },
    { content: '3초의 시간이 지난 뒤, 사진 속 사람이 몇 명 나왔는지 확인합니다.' },
    { content: '많은 사람 혹은 적은 사람에 따라 결과를 정합니다' },
  ];

  const faqData = [
    {
      content:
        '복불복 게임 규칙은 어떻게 되나요? → 사용자가 정한 규칙에 따라 사진 속 사람이 많이 나오거나 적게 나온 사람이 당첨입니다.',
    },
    {
      content:
        '사람 얼굴이 반만 나왔어요! → 복불복 게임 전 미리 규칙을 정하고 게임을 하시는걸 추천합니다. 예를들어 사람 얼굴이 80% 이상 나오면 OK',
    },

    {
      content: '사람이 아닌 캐릭터는 어떻게 되나요? → 캐릭터는 인정하지 않습니다. ',
    },
  ];

  return (
    <MainPage>
      <StyleHeader>
        <StyleTitle>
          <span>복불복 게임</span>
        </StyleTitle>
      </StyleHeader>
      <StyleMain>
        <MoveBox>
          <ModalBox>
            <Link to="/game">시작하기</Link>
          </ModalBox>
          <ModalBox onClick={handleInstruction}>Guide</ModalBox>
          <ModalBox onClick={handleFaq}>FAQ</ModalBox>
        </MoveBox>
      </StyleMain>
      <Modal
        offModal={offInstructionModal}
        isModalOpened={isInstructionModal}
        title="복불복 게임 설명서"
        data={instructionData}
      />
      <Modal
        offModal={offFaqModal}
        isModalOpened={isFaqModal}
        title="복불복 게임 FAQ"
        data={faqData}
      />
    </MainPage>
  );
};

export default App;
