import React, { useCallback, useEffect, useState } from 'react';
import MainPage from '../../layout/MainPage/index.tsx';
import { fetchGifList } from '../../utils/api.ts';
import { IImgList } from '../../types/types.ts';
import Error from '../../components/Error/index.tsx';

import {
  StyleMain,
  StyleFormContainer,
  StyleForm,
  StyleInputBox,
  StyleMessage,
  StyleCountBox,
  StyleImg,
  StyleButton,
} from './index.style.ts';
import {
  INPUT_REG,
  ALERT_MESSAGE,
  HTTP_STATUS_OK,
  COUNT_START_NUMBER,
  COUNT_TIME,
  INPUT_REQUEST_MESSAGE,
} from '../../utils/constants/game.js';
import Header from '../../components/Header/index.js';

export function checkInput(value: string) {
  return INPUT_REG.test(value);
}

function Game() {
  const [list, setList] = useState([]);
  const [currentImg, setCurrentImg] = useState<IImgList | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [isCounting, setIsCounting] = useState(false);
  const [countdown, setCountdown] = useState(COUNT_START_NUMBER);
  const [error, setError] = useState(null);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputElement = e.currentTarget.elements[0] as HTMLInputElement;

    if (!checkInput(inputElement.value)) {
      alert(ALERT_MESSAGE);
      setInputValue('');
      return;
    }

    setIsCounting(true);
    setInputValue('');
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const getRandomImg = (list: IImgList[]): IImgList => {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
  };

  const updateImg = async () => {
    const result = await fetchGifList();
    if (result && result?.status !== HTTP_STATUS_OK) setError(result.status);
    else setList(result?.data.data);
  };

  useEffect(() => {
    updateImg();
  }, []);

  useEffect(() => {
    if (isCounting) {
      if (countdown === 0) {
        setCurrentImg(getRandomImg(list));
        setIsCounting(false);
        setCountdown(COUNT_START_NUMBER);
        return;
      }

      const timer = setTimeout(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, COUNT_TIME);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isCounting, countdown, list]);

  return (
    <MainPage>
      <Header />

      <StyleMain>
        {error && <Error errorCode={error} />}
        {!error && isCounting && <StyleCountBox>{countdown}</StyleCountBox>}
        {!error && !isCounting && (
          <>
            <StyleFormContainer>
              <StyleForm onSubmit={handleSubmit} role="form">
                <StyleInputBox>
                  <StyleMessage htmlFor="input">{INPUT_REQUEST_MESSAGE}</StyleMessage>
                  <input
                    type="text"
                    id="input"
                    value={inputValue}
                    onChange={handleOnChange}
                    maxLength={2}
                  />

                  <StyleButton>입력</StyleButton>
                </StyleInputBox>
              </StyleForm>
            </StyleFormContainer>
            {currentImg && (
              <StyleImg src={currentImg.images?.original?.url} alt={currentImg.title} />
            )}
          </>
        )}
      </StyleMain>
    </MainPage>
  );
}

export default Game;
