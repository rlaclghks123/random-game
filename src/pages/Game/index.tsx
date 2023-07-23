import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainPage from '../../layout/MainPage/index.tsx';
import { fetchGifList } from '../../utils/api.ts';
import { IImgList } from '../../types/types.ts';
import Error from '../../components/Error/index.tsx';

import {
  StyleHeader,
  StyleTitle,
  StyleMain,
  StyleFormContainer,
  StyleForm,
  StyleMessage,
  StyleCountBox,
  StyleImg,
} from './index.style.ts';

function Game() {
  const [list, setList] = useState([]);
  const [currentImg, setCurrentImg] = useState<IImgList | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [isCounting, setIsCounting] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [error, setError] = useState(null);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const regex = /^[1-9]$|^[1-4][0-9]$|^50$/;
    const inputElement = e.currentTarget.elements[0] as HTMLInputElement;

    if (!regex.test(inputElement.value)) {
      alert('1에서 50까지의 숫자만 입력해주세요.');
      setInputValue('');
      return;
    }

    setIsCounting(true);
    setInputValue('');
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const getRandomImg = (list: IImgList[]): IImgList | null => {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
  };

  const updateImg = async () => {
    const result = await fetchGifList();
    if (result && result?.status !== 200) setError(result.status);
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
        setCountdown(3);
        return;
      }

      const timer = setTimeout(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isCounting, countdown, list]);

  return (
    <MainPage>
      <StyleHeader>
        <StyleTitle>
          <Link to="/">복불복 게임</Link>
        </StyleTitle>
      </StyleHeader>

      {error ? (
        <Error errorCode={error} />
      ) : (
        <StyleMain>
          {isCounting ? (
            <StyleCountBox>{countdown}</StyleCountBox>
          ) : (
            <>
              <StyleFormContainer>
                <StyleForm onSubmit={handleSubmit}>
                  <input role="input" value={inputValue} onChange={handleOnChange} maxLength={2} />
                </StyleForm>
                <StyleMessage>{'1부터 50까지의 숫자를 입력해주세요'}</StyleMessage>
              </StyleFormContainer>
              {currentImg && <StyleImg src={currentImg.images?.original?.url} alt={'GIF'} />}
            </>
          )}
        </StyleMain>
      )}
    </MainPage>
  );
}

export default Game;
