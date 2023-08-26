import React, { useEffect, useState } from 'react';
import MainPage from '../../layout/MainPage/index.tsx';
import { fetchGifList } from '../../utils/api.ts';
import { IImgList } from '../../types/types.ts';

import { StyleMain, StyleCountBox } from './index.style.ts';
import { HTTP_STATUS_OK, COUNT_START_NUMBER, COUNT_TIME } from '../../utils/constants/game.js';
import Header from '../../components/Header/index.js';
import ErrorForm from '../../components/ErrorForm/index.js';
import SearchImage from '../../components/SearchImage/index.js';

function Game() {
  const [list, setList] = useState([]);
  const [currentImg, setCurrentImg] = useState<IImgList | null>(null);
  const [isCounting, setIsCounting] = useState(false);
  const [countdown, setCountdown] = useState(COUNT_START_NUMBER);
  const [error, setError] = useState(null);

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
        {error && <ErrorForm errorCode={error} />}
        {!error && isCounting && <StyleCountBox>{countdown}</StyleCountBox>}
        {!error && !isCounting && (
          <SearchImage currentImg={currentImg} setIsCounting={setIsCounting} />
        )}
      </StyleMain>
    </MainPage>
  );
}

export default Game;
