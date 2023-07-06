import React, { useCallback, useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { fetchImgList } from './utils/api';
import Modal from './components/Modal.tsx';

const StyleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
  box-sizing: border-box;
`;

const StyleGameBox = styled.div`
  width: 768px;
  height: 500px;
  background-color: #d4b995;
`;

const StyleHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0px;

  position: relative;

  form {
    margin: 10px 0px;
  }
`;

const StyleAside = styled.aside`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 5px;
  right: 5px;

  button {
    margin-bottom: 5px;
  }
`;

const StyleMessage = styled.div`
  font-size: 12px;
  color: #a17955;
  font-weight: 800;
`;

const StyleTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const StyleMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 70%;

  border-top: 1px solid rgba(0, 0, 0, 0.2);

  div {
    width: 200px;
    height: 200px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 20px;
    box-shadow: 5px 5px 5px -5px;
  }
`;

const StyleBtn = styled.button`
  border-color: transparent;
  border-radius: 10px;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);

  margin-bottom: 50px;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

interface IImgList {
  id: string;
  urls: {
    thumb: string;
  };
  alt_description: string;
}

function App() {
  const [keyword, setKeyword] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isInstructionModal, setIsInstructionModal] = useState(false);
  const [isFaqModal, setIsFaqModal] = useState(false);
  const [list, setList] = useState<IImgList[]>();
  const [currentImg, setCurrentImg] = useState<IImgList>();
  const [alarm, setAlarm] = useState(false);

  const selectRef = useRef<HTMLSelectElement | null>(null);

  const handleInstruction = () => {
    setIsInstructionModal(true);
  };

  const handleFaq = () => {
    setIsFaqModal(true);
  };

  const handleSub = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setKeyword(inputValue);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInputValue(e.target.value);
  };

  const getRandomImg = (list: IImgList[]) => {
    const random = Math.floor(Math.random() * list.length);
    return list[random];
  };

  const handleClick = () => {
    if (list) setCurrentImg(getRandomImg(list));
  };

  const updateImg = async (keyword: string) => {
    const result = await fetchImgList(keyword);
    setList(result);
  };

  useEffect(() => {
    const handleFocus = () => {
      setAlarm(true);
    };

    const handleBlur = () => {
      setAlarm(false);
    };
    const current = selectRef.current;

    current?.addEventListener('focus', handleFocus);
    current?.addEventListener('blur', handleBlur);

    return () => {
      current?.removeEventListener('focus', handleFocus);
      current?.removeEventListener('blur', handleBlur);
    };
  }, []);

  useEffect(() => {
    if (keyword !== '') updateImg(keyword);
  }, [keyword]);

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
    <StyleContainer>
      <StyleGameBox>
        <StyleHeader>
          <StyleTitle>복불복 게임</StyleTitle>
          <StyleAside>
            <StyleBtn onClick={handleInstruction}>복불복 게임 설명서</StyleBtn>
            <StyleBtn onClick={handleFaq}>FAQ</StyleBtn>
          </StyleAside>

          <form onSubmit={handleSub}>
            <select name="category" form="myForm" onChange={handleOnChange} ref={selectRef}>
              <option value="">선택해주세요</option>
              <option value="people">People</option>
              <option value="dogs">Dogs</option>
              <option value="birds">Birds</option>
              <option value="chairs">Chairs</option>
              <option value="number">Number</option>
            </select>
            <input type="submit" value="선택"></input>
          </form>
          {alarm && <StyleMessage>선택을 눌러주세요</StyleMessage>}
        </StyleHeader>
        <StyleMain>
          {keyword !== '' && <StyleBtn onClick={handleClick}>{`🔍 Find ${keyword}`}</StyleBtn>}
          {keyword !== '' && !currentImg && <div>Good Luck!</div>}
          {currentImg && <img src={currentImg?.urls.thumb} alt={currentImg?.alt_description} />}
        </StyleMain>
      </StyleGameBox>
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
    </StyleContainer>
  );
}

export default App;
