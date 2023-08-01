import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import Modal from '../../components/Modal';
import MainPage from '../../layout/MainPage';
import {
  StyleHeader,
  StyleTitle,
  StyleMain,
  StyleMoveBox,
  StyleModalBox,
  StyleButton,
} from './index.style';
import { HOME_LINK,
GAME_LINK,
RANDOM_GAME_TITLE,
GAME_LINK_TITLE,
GUIDE_TITLE,
FAQ_TITLE,
MODAL_INSTRUCTION_TITLE,
MODAL_FAQ_TITLE, } from '../../components/constants/home';

const Home = () => {
  const [isInstructionModal, setIsInstructionModal] = useState(false);
  const [isFaqModal, setIsFaqModal] = useState(false);

  const handleInstruction = () => setIsInstructionModal(true);

  const handleFaq = () => setIsFaqModal(true);

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
          <Link to={HOME_LINK}>{RANDOM_GAME_TITLE}</Link>
        </StyleTitle>
      </StyleHeader>

      <StyleMain>
        <StyleMoveBox>
          <StyleModalBox>
            <Link to={GAME_LINK}>{GAME_LINK_TITLE}</Link>
          </StyleModalBox>
          <StyleModalBox>
            <StyleButton onClick={handleInstruction}>{GUIDE_TITLE}</StyleButton>
          </StyleModalBox>
          <StyleModalBox>
            <StyleButton onClick={handleFaq}>{FAQ_TITLE}</StyleButton>
          </StyleModalBox>
        </StyleMoveBox>
      </StyleMain>
      {isInstructionModal && (
        <Modal offModal={offInstructionModal} title={MODAL_INSTRUCTION_TITLE} data={instructionData} />
      )}
      {isFaqModal && <Modal offModal={offFaqModal} title={MODAL_FAQ_TITLE} data={faqData} />}
    </MainPage>
  );
};

export default Home;
