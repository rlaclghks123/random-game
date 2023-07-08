import { styled } from 'styled-components';
import Modal from '../components/Modal';
import MainPage from './MainPage';
import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

const StyleHeader = styled.div`
  padding: 15px;
`;

const StyleTitle = styled.div`
  font-size: 30px;
  font-weight: 900;
  font-family: Georgia, 'Times New Roman', serif;
  color: white;
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
    { content: '복불복 게임의 카테고리를 고른 뒤 선택 버튼을 눌러줍니다.' },
    { content: '마음의 준비를 합니다' },
    { content: 'Find 버튼을 눌러 몇 명이 나왔는지 확인합니다.' },
    { content: '많은 사람 혹은 적은 사람에 따라 결과를 정합니다' },
  ];

  const faqData = [
    {
      content:
        '복불복 게임 규칙은 어떻게 되나요? → 사진속 카테고리가 많이 나오거나 적게 나온 사람이 당첨입니다.',
    },
    {
      content:
        '사람 얼굴이 반만 나왔어요! → 복불복 게임 전 미리 규칙을 정하고 게임을 하시는걸 추천합니다. 예를들어 사람 얼굴이 80% 이상 나오면 OK',
    },

    {
      content: '숫자 카테고리 중 숫자가 여러개 나오면 어떻게 하나요? → 가장 큰 수로 설정합니다 ',
    },
  ];

  return (
    <MainPage>
      <StyleHeader>
        <StyleTitle>복불복 게임</StyleTitle>
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
