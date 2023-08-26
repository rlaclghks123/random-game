import { useCallback, useState } from 'react';

import MainPage from '../../layout/MainPage';

import Modal from '../../components/Modal';
import Header from '../../components/Header';
import LinkBtn from '../../components/LinkBtn';
import ModalBtn from '../../components/ModalBtn';
import {
  GAME_LINK,
  GAME_LINK_TITLE,
  GUIDE_TITLE,
  FAQ_TITLE,
  MODAL_INSTRUCTION_TITLE,
  MODAL_FAQ_TITLE,
  instructionData,
  faqData,
} from '../../utils/constants/home';
import { StyleMain, StyleMoveBox } from './index.style';

const Home = () => {
  const [isInstructionModal, setIsInstructionModal] = useState(false);
  const [isFaqModal, setIsFaqModal] = useState(false);

  const offInstructionModal = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget === e.target) setIsInstructionModal(false);
  }, []);

  const offFaqModal = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget === e.target) setIsFaqModal(false);
  }, []);

  return (
    <MainPage>
      <Header />

      <StyleMain>
        <StyleMoveBox>
          <LinkBtn link={GAME_LINK} title={GAME_LINK_TITLE} />
          <ModalBtn onClick={() => setIsInstructionModal(true)} title={GUIDE_TITLE} />
          <ModalBtn onClick={() => setIsFaqModal(true)} title={FAQ_TITLE} />
        </StyleMoveBox>
      </StyleMain>

      {isInstructionModal && (
        <Modal
          offModal={offInstructionModal}
          title={MODAL_INSTRUCTION_TITLE}
          data={instructionData}
        />
      )}
      {isFaqModal && <Modal offModal={offFaqModal} title={MODAL_FAQ_TITLE} data={faqData} />}
    </MainPage>
  );
};

export default Home;
